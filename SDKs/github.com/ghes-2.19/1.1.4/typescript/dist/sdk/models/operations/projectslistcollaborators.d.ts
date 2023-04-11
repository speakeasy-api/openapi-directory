import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters the collaborators by their affiliation. Can be one of:
 *
 * @remarks
 * \* `outside`: Outside collaborators of a project that are not a member of the project's organization.
 * \* `direct`: Collaborators with permissions to a project, regardless of organization membership status.
 * \* `all`: All collaborators the authenticated user can see.
 */
export declare enum ProjectsListCollaboratorsAffiliationEnum {
    Outside = "outside",
    Direct = "direct",
    All = "all"
}
export declare class ProjectsListCollaboratorsRequest extends SpeakeasyBase {
    /**
     * Filters the collaborators by their affiliation. Can be one of:
     *
     * @remarks
     * \* `outside`: Outside collaborators of a project that are not a member of the project's organization.
     * \* `direct`: Collaborators with permissions to a project, regardless of organization membership status.
     * \* `all`: All collaborators the authenticated user can see.
     */
    affiliation?: ProjectsListCollaboratorsAffiliationEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    projectId: number;
}
/**
 * Preview header missing
 */
export declare class ProjectsListCollaborators415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsListCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Preview header missing
     */
    projectsListCollaborators415ApplicationJSONObject?: ProjectsListCollaborators415ApplicationJSON;
    /**
     * Response
     */
    simpleUsers?: shared.SimpleUser[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
