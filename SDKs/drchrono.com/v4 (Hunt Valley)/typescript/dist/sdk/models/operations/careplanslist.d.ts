import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CarePlansListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CarePlansListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    planType?: number;
}
/**
 * Paginated Result
 */
export declare class CarePlansList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CarePlan[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class CarePlansListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    carePlansList200ApplicationJSONObject?: CarePlansList200ApplicationJSON;
}
