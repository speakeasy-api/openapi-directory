import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabOrdersListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class LabOrdersList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.LabOrder[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class LabOrdersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    labOrdersList200ApplicationJSONObject?: LabOrdersList200ApplicationJSON;
}
