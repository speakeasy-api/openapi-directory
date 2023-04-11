import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineItemsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LineItemsListRequest extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class LineItemsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.BillingLineItem[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class LineItemsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    lineItemsList200ApplicationJSONObject?: LineItemsList200ApplicationJSON;
}
