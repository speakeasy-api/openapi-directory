import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCreateMembershipSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class TeamsCreateMembershipRequestBody extends SpeakeasyBase {
    /**
     * New team member email.
     */
    email: string;
    /**
     * New team member name. Max length: 128 chars.
     */
    name?: string;
    /**
     * Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars.
     */
    roles: string[];
    /**
     * URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     */
    url: string;
}
export declare class TeamsCreateMembershipRequest extends SpeakeasyBase {
    requestBody?: TeamsCreateMembershipRequestBody;
    /**
     * Team unique ID.
     */
    teamId: string;
}
export declare class TeamsCreateMembershipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Membership
     */
    membership?: shared.Membership;
}
