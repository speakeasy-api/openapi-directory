import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionRulesTransactionRuleIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetTransactionRulesTransactionRuleIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the transaction rule.
     */
    transactionRuleId: string;
}
export declare class GetTransactionRulesTransactionRuleIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    transactionRuleResponse?: shared.TransactionRuleResponse;
}
