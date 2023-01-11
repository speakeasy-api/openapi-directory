import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTransactionRulesTransactionRuleIdPathParams extends SpeakeasyBase {
    transactionRuleId: string;
}
export declare class PatchTransactionRulesTransactionRuleIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PatchTransactionRulesTransactionRuleIdRequest extends SpeakeasyBase {
    pathParams: PatchTransactionRulesTransactionRuleIdPathParams;
    request?: any;
    security: PatchTransactionRulesTransactionRuleIdSecurity;
}
export declare class PatchTransactionRulesTransactionRuleIdResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transactionRule?: any;
}
