import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomDemographicsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomDemographicsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class CustomDemographicsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CustomPatientFieldType[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class CustomDemographicsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    customDemographicsList200ApplicationJSONObject?: CustomDemographicsList200ApplicationJSON;
}
