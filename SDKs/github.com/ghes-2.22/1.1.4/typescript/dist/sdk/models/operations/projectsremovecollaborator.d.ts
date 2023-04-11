import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsRemoveCollaboratorRequest extends SpeakeasyBase {
    projectId: number;
    username: string;
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
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
