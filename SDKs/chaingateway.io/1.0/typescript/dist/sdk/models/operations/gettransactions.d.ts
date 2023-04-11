import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionsRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    getTransactionsRequest: shared.GetTransactionsRequest;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getTransactions?: shared.GetTransactions;
}
