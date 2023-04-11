import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsUpdateMembershipRolesSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class TeamsUpdateMembershipRolesRequestBody extends SpeakeasyBase {
    /**
     * Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.
     */
    roles: string[];
}
export declare class TeamsUpdateMembershipRolesRequest extends SpeakeasyBase {
    requestBody?: TeamsUpdateMembershipRolesRequestBody;
    /**
     * Membership ID.
     */
    membershipId: string;
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsUpdateMembershipRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Membership
     */
    membership?: shared.Membership;
}
