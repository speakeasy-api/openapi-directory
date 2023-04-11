import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsGetPermissionForUserRequest extends SpeakeasyBase {
    projectId: number;
    username: string;
}
/**
 * Preview header missing
 */
export declare class ProjectsGetPermissionForUser415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsGetPermissionForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Preview header missing
     */
    projectsGetPermissionForUser415ApplicationJSONObject?: ProjectsGetPermissionForUser415ApplicationJSON;
    /**
     * Response
     */
    repositoryCollaboratorPermission?: shared.RepositoryCollaboratorPermission;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
