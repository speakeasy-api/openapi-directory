import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction of the sort. Either `asc` or `desc`.
 */
export declare enum IssuesListMilestonesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * What to sort results by. Either `due_on` or `completeness`.
 */
export declare enum IssuesListMilestonesSortEnum {
    DueOn = "due_on",
    Completeness = "completeness"
}
/**
 * The state of the milestone. Either `open`, `closed`, or `all`.
 */
export declare enum IssuesListMilestonesStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class IssuesListMilestonesRequest extends SpeakeasyBase {
    /**
     * The direction of the sort. Either `asc` or `desc`.
     */
    direction?: IssuesListMilestonesDirectionEnum;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * What to sort results by. Either `due_on` or `completeness`.
     */
    sort?: IssuesListMilestonesSortEnum;
    /**
     * The state of the milestone. Either `open`, `closed`, or `all`.
     */
    state?: IssuesListMilestonesStateEnum;
}
export declare class IssuesListMilestonesResponse extends SpeakeasyBase {
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
    milestones?: shared.Milestone[];
}
