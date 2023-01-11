import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransactionsListQueryParams extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    lineItem?: number;
    pageSize?: number;
    postedDate?: string;
    since?: string;
}
export declare class TransactionsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class TransactionsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.LineItemTransaction[];
    next?: string;
    previous?: string;
}
export declare class TransactionsListRequest extends SpeakeasyBase {
    queryParams: TransactionsListQueryParams;
    security: TransactionsListSecurity;
}
export declare class TransactionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transactionsList200ApplicationJSONObject?: TransactionsList200ApplicationJson;
}
