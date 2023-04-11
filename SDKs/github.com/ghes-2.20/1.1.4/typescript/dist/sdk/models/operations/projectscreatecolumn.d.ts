import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsCreateColumnRequestBody extends SpeakeasyBase {
    /**
     * Name of the project column
     */
    name: string;
}
export declare class ProjectsCreateColumnRequest extends SpeakeasyBase {
    requestBody: ProjectsCreateColumnRequestBody;
    projectId: number;
}
export declare class ProjectsCreateColumnResponse extends SpeakeasyBase {
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
    projectColumn?: shared.ProjectColumn;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
