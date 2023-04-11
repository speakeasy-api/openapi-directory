import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomInsurancePlanNamesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomInsurancePlanNamesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    name?: string;
    pageSize?: number;
    since?: string;
    user?: number;
}
/**
 * Paginated Result
 */
export declare class CustomInsurancePlanNamesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CustomInsurancePlanName[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class CustomInsurancePlanNamesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    customInsurancePlanNamesList200ApplicationJSONObject?: CustomInsurancePlanNamesList200ApplicationJSON;
}
