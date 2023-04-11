import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsGetMembershipForUserInOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
    username: string;
}
export declare class TeamsGetMembershipForUserInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamMembership?: shared.TeamMembership;
}
