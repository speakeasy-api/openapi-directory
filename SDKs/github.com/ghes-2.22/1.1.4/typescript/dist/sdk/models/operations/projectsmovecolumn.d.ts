import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsMoveColumnRequestBody extends SpeakeasyBase {
    /**
     * The position of the column in a project. Can be one of: `first`, `last`, or `after:<column_id>` to place after the specified column.
     */
    position: string;
}
export declare class ProjectsMoveColumnRequest extends SpeakeasyBase {
    requestBody: ProjectsMoveColumnRequestBody;
    /**
     * column_id parameter
     */
    columnId: number;
}
export declare class ProjectsMoveColumnResponse extends SpeakeasyBase {
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
    projectsMoveColumn201ApplicationJSONObject?: Record<string, any>;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
