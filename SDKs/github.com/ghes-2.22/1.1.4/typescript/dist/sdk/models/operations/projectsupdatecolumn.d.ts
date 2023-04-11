import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsUpdateColumnRequestBody extends SpeakeasyBase {
    /**
     * Name of the project column
     */
    name: string;
}
export declare class ProjectsUpdateColumnRequest extends SpeakeasyBase {
    requestBody: ProjectsUpdateColumnRequestBody;
    /**
     * column_id parameter
     */
    columnId: number;
}
export declare class ProjectsUpdateColumnResponse extends SpeakeasyBase {
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
}
