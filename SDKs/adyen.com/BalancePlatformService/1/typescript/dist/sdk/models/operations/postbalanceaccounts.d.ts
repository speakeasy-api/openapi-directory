import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBalanceAccountsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostBalanceAccountsRequest extends SpeakeasyBase {
    request?: any;
    security: PostBalanceAccountsSecurity;
}
export declare class PostBalanceAccountsResponse extends SpeakeasyBase {
    balanceAccount?: any;
    contentType: string;
    restServiceError?: any;
    statusCode: number;
}
