import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArchiveAssignmentSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ArchiveAssignmentRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class ArchiveAssignmentResponse extends SpeakeasyBase {
    /**
     * The assignment details
     */
    assignment?: shared.Assignment;
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
