import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sorts the discussion comments by the date they were created. To return the oldest comments first, set to `asc`. Can be one of `asc` or `desc`.
 */
export declare enum TeamsListDiscussionCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class TeamsListDiscussionCommentsRequest extends SpeakeasyBase {
    /**
     * Sorts the discussion comments by the date they were created. To return the oldest comments first, set to `asc`. Can be one of `asc` or `desc`.
     */
    direction?: TeamsListDiscussionCommentsDirectionEnum;
    discussionNumber: number;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    teamId: number;
}
export declare class TeamsListDiscussionCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamDiscussionComments?: shared.TeamDiscussionComment[];
}
