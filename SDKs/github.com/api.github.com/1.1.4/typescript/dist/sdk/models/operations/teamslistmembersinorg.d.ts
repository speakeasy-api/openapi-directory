import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters members returned by their role in the team.
 */
export declare enum TeamsListMembersInOrgRoleEnum {
    Member = "member",
    Maintainer = "maintainer",
    All = "all"
}
export declare class TeamsListMembersInOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * Filters members returned by their role in the team.
     */
    role?: TeamsListMembersInOrgRoleEnum;
    /**
     * The slug of the team name.
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
