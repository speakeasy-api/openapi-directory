import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsDeleteColumnRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the column.
     */
    columnId: number;
}
export declare class ProjectsDeleteColumnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
