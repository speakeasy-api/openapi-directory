import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminCreateUserRequestBody extends SpeakeasyBase {
    /**
     * **Required for built-in authentication.** The user's email address. This parameter can be omitted when using CAS, LDAP, or SAML. For details on built-in and centrally-managed authentication, see the [GitHub authentication guide](https://help.github.com/enterprise/2.19/admin/guides/user-management/authenticating-users-for-your-github-enterprise-server-instance/).
     */
    email?: string;
    /**
     * The user's username.
     */
    login: string;
}
export declare class EnterpriseAdminCreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    simpleUser?: shared.SimpleUser;
}
