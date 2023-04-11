import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
 */
export declare enum ProjectsListForUserStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}
export declare class ProjectsListForUserRequest extends SpeakeasyBase {
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
    state?: ProjectsListForUserStateEnum;
    username: string;
}
/**
 * Preview header missing
 */
export declare class ProjectsListForUser415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    projects?: shared.Project[];
    /**
     * Preview header missing
     */
    projectsListForUser415ApplicationJSONObject?: ProjectsListForUser415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
