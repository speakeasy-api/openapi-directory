import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CopyAssignmentSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CopyAssignmentRequest extends SpeakeasyBase {
    assignmentCopy: shared.AssignmentCopy;
    /**
     * Unique identifier of the assignment
     */
    assignment: string;
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class CopyAssignmentResponse extends SpeakeasyBase {
    /**
     * The new created assingment
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
