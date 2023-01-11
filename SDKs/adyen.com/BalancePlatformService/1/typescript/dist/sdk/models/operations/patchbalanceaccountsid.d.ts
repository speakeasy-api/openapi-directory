import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchBalanceAccountsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchBalanceAccountsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PatchBalanceAccountsIdRequest extends SpeakeasyBase {
    pathParams: PatchBalanceAccountsIdPathParams;
    request?: any;
    security: PatchBalanceAccountsIdSecurity;
}
export declare class PatchBalanceAccountsIdResponse extends SpeakeasyBase {
    balanceAccount?: any;
    contentType: string;
    restServiceError?: any;
    statusCode: number;
}
