import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransactionsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TransactionsListRequest extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    lineItem?: number;
    pageSize?: number;
    postedDate?: string;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class TransactionsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.LineItemTransaction[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class TransactionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    transactionsList200ApplicationJSONObject?: TransactionsList200ApplicationJSON;
}
