import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTransactionRulesTransactionRuleIdPathParams extends SpeakeasyBase {
    transactionRuleId: string;
}
export declare class DeleteTransactionRulesTransactionRuleIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class DeleteTransactionRulesTransactionRuleIdRequest extends SpeakeasyBase {
    pathParams: DeleteTransactionRulesTransactionRuleIdPathParams;
    security: DeleteTransactionRulesTransactionRuleIdSecurity;
}
export declare class DeleteTransactionRulesTransactionRuleIdResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transactionRule?: any;
}
