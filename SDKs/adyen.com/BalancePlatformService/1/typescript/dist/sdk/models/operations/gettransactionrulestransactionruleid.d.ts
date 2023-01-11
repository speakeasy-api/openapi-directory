import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionRulesTransactionRuleIdPathParams extends SpeakeasyBase {
    transactionRuleId: string;
}
export declare class GetTransactionRulesTransactionRuleIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetTransactionRulesTransactionRuleIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionRulesTransactionRuleIdPathParams;
    security: GetTransactionRulesTransactionRuleIdSecurity;
}
export declare class GetTransactionRulesTransactionRuleIdResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transactionRuleResponse?: any;
}
