import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
 */
export declare enum ProjectsListForRepoStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class ProjectsListForRepoRequest extends SpeakeasyBase {
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    /**
     * Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
     */
    state?: ProjectsListForRepoStateEnum;
}
export declare class ProjectsListForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    projects?: shared.Project[];
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
