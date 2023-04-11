import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
 */
export declare enum ProjectsListForOrgStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class ProjectsListForOrgRequest extends SpeakeasyBase {
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
     * Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
     */
    state?: ProjectsListForOrgStateEnum;
}
export declare class ProjectsListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    projects?: shared.Project[];
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
