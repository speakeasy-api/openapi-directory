import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTransactionRulesSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostTransactionRulesRequest extends SpeakeasyBase {
    request?: any;
    security: PostTransactionRulesSecurity;
}
export declare class PostTransactionRulesResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transactionRule?: any;
}
