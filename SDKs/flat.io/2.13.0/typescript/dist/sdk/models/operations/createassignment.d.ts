import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAssignmentSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateAssignmentRequest extends SpeakeasyBase {
    assignmentCreation?: shared.AssignmentCreation;
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class CreateAssignmentResponse extends SpeakeasyBase {
    /**
     * The assignment has been created
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
