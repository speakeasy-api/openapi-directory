import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransactionsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class TransactionsReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    lineItem?: number;
    postedDate?: string;
    since?: string;
}
export declare class TransactionsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TransactionsReadRequest extends SpeakeasyBase {
    pathParams: TransactionsReadPathParams;
    queryParams: TransactionsReadQueryParams;
    security: TransactionsReadSecurity;
}
export declare class TransactionsReadResponse extends SpeakeasyBase {
    contentType: string;
    lineItemTransaction?: shared.LineItemTransaction;
    statusCode: number;
}
