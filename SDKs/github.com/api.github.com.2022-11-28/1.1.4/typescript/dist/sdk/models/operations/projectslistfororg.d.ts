import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates the state of the projects to return.
 */
export declare enum ProjectsListForOrgStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class ProjectsListForOrgRequest extends SpeakeasyBase {
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
     * Indicates the state of the projects to return.
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
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
