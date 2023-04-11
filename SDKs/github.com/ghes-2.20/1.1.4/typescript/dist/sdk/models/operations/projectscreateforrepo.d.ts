import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsCreateForRepoRequestBody extends SpeakeasyBase {
    /**
     * The description of the project.
     */
    body?: string;
    /**
     * The name of the project.
     */
    name: string;
}
export declare class ProjectsCreateForRepoRequest extends SpeakeasyBase {
    requestBody: ProjectsCreateForRepoRequestBody;
    owner: string;
    repo: string;
}
export declare class ProjectsCreateForRepoResponse extends SpeakeasyBase {
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
    project?: shared.Project;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
