import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsGetColumnRequest extends SpeakeasyBase {
    /**
     * column_id parameter
     */
    columnId: number;
}
export declare class ProjectsGetColumnResponse extends SpeakeasyBase {
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
