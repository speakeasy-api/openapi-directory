import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAssignmentsResponse extends SpeakeasyBase {
    /**
     * Assignment created
     */
    assignment?: shared.Assignment;
    contentType: string;
    /**
     * The new assignment vailed to validate. Check the response body for details.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
