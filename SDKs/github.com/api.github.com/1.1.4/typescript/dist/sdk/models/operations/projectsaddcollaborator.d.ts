import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permission to grant the collaborator.
 */
export declare enum ProjectsAddCollaboratorRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class ProjectsAddCollaboratorRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the collaborator.
     */
    permission?: ProjectsAddCollaboratorRequestBodyPermissionEnum;
}
export declare class ProjectsAddCollaboratorRequest extends SpeakeasyBase {
    requestBody?: ProjectsAddCollaboratorRequestBody;
    /**
     * The unique identifier of the project.
     */
    projectId: number;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class ProjectsAddCollaboratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
