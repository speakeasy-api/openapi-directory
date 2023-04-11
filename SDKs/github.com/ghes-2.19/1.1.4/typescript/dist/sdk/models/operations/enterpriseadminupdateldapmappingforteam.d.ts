import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdateLdapMappingForTeamRequestBody extends SpeakeasyBase {
    /**
     * The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team.
     */
    ldapDn?: string;
}
export declare class EnterpriseAdminUpdateLdapMappingForTeamRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdateLdapMappingForTeamRequestBody;
    teamId: number;
}
export declare class EnterpriseAdminUpdateLdapMappingForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    ldapMappingTeam?: shared.LdapMappingTeam;
}
