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
    projectId: number;
    username: string;
}
/**
 * Preview header missing
 */
export declare class ProjectsAddCollaborator415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
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
     * Preview header missing
     */
    projectsAddCollaborator415ApplicationJSONObject?: ProjectsAddCollaborator415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
