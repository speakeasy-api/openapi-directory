import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters members returned by their role in the team. Can be one of:
 *
 * @remarks
 * \* `member` - normal members of the team.
 * \* `maintainer` - team maintainers.
 * \* `all` - all members of the team.
 */
export declare enum TeamsListMembersInOrgRoleEnum {
    Member = "member",
    Maintainer = "maintainer",
    All = "all"
}
export declare class TeamsListMembersInOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Filters members returned by their role in the team. Can be one of:
     *
     * @remarks
     * \* `member` - normal members of the team.
     * \* `maintainer` - team maintainers.
     * \* `all` - all members of the team.
     */
    role?: TeamsListMembersInOrgRoleEnum;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsListMembersInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    simpleUsers?: shared.SimpleUser[];
}
