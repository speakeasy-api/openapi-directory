import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBalanceAccountsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBalanceAccountsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetBalanceAccountsIdRequest extends SpeakeasyBase {
    pathParams: GetBalanceAccountsIdPathParams;
    security: GetBalanceAccountsIdSecurity;
}
export declare class GetBalanceAccountsIdResponse extends SpeakeasyBase {
    balanceAccount?: any;
    contentType: string;
    restServiceError?: any;
    statusCode: number;
}
