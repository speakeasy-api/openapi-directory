import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdateLdapMappingForUserRequestBody extends SpeakeasyBase {
    /**
     * The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team.
     */
    ldapDn?: string;
}
export declare class EnterpriseAdminUpdateLdapMappingForUserRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdateLdapMappingForUserRequestBody;
    username: string;
}
export declare class EnterpriseAdminUpdateLdapMappingForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    ldapMappingUser?: shared.LdapMappingUser;
}
