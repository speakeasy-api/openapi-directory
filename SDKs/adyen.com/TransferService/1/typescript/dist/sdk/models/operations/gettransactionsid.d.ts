import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionsIdSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetTransactionsIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the transaction.
     */
    id: string;
}
export declare class GetTransactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized - authentication required.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    transaction?: shared.Transaction;
}
