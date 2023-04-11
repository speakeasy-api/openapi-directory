import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsRemoveCollaboratorRequest extends SpeakeasyBase {
    projectId: number;
    username: string;
}
/**
 * Preview header missing
 */
export declare class ProjectsRemoveCollaborator415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsRemoveCollaboratorResponse extends SpeakeasyBase {
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
    projectsRemoveCollaborator415ApplicationJSONObject?: ProjectsRemoveCollaborator415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
