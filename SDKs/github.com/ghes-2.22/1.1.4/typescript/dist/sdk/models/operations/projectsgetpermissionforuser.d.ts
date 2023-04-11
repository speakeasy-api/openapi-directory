import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsGetPermissionForUserRequest extends SpeakeasyBase {
    projectId: number;
    username: string;
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
     * Response
     */
    projectCollaboratorPermission?: shared.ProjectCollaboratorPermission;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
