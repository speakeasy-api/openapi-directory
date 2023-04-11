import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAssignmentsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ListAssignmentsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class ListAssignmentsResponse extends SpeakeasyBase {
    /**
     * List of assignments for the class
     */
    assignments?: shared.Assignment[];
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
