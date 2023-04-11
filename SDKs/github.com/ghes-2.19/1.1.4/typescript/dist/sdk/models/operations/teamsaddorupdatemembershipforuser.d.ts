import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The role that this user should have in the team. Can be one of:
 *
 * @remarks
 * \* `member` - a normal member of the team.
 * \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
 */
export declare enum TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum {
    Member = "member",
    Maintainer = "maintainer"
}
export declare class TeamsAddOrUpdateMembershipForUserRequestBody extends SpeakeasyBase {
    /**
     * The role that this user should have in the team. Can be one of:
     *
     * @remarks
     * \* `member` - a normal member of the team.
     * \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
     */
    role?: TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum;
}
export declare class TeamsAddOrUpdateMembershipForUserRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateMembershipForUserRequestBody;
    teamId: number;
    username: string;
}
export declare class TeamsAddOrUpdateMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamMembership?: shared.TeamMembership;
}
