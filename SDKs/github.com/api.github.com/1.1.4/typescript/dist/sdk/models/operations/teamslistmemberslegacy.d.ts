import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters members returned by their role in the team.
 */
export declare enum TeamsListMembersLegacyRoleEnum {
    Member = "member",
    Maintainer = "maintainer",
    All = "all"
}
export declare class TeamsListMembersLegacyRequest extends SpeakeasyBase {
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
    role?: TeamsListMembersLegacyRoleEnum;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsListMembersLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    simpleUsers?: shared.SimpleUser[];
}
