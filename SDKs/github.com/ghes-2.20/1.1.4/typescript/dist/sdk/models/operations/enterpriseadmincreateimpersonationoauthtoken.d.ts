import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody extends SpeakeasyBase {
    /**
     * A list of [scopes](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    scopes?: string[];
}
export declare class EnterpriseAdminCreateImpersonationOAuthTokenRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;
    username: string;
}
export declare class EnterpriseAdminCreateImpersonationOAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
}
