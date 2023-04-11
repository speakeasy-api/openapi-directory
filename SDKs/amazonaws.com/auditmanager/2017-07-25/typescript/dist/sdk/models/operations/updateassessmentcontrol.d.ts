import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The status of the control.
 */
export declare enum UpdateAssessmentControlRequestBodyControlStatusEnum {
    UnderReview = "UNDER_REVIEW",
    Reviewed = "REVIEWED",
    Inactive = "INACTIVE"
}
export declare class UpdateAssessmentControlRequestBody extends SpeakeasyBase {
    /**
     *  The comment body text for the control.
     */
    commentBody?: string;
    /**
     *  The status of the control.
     */
    controlStatus?: UpdateAssessmentControlRequestBodyControlStatusEnum;
}
export declare class UpdateAssessmentControlRequest extends SpeakeasyBase {
    requestBody: UpdateAssessmentControlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique identifier for the assessment.
     */
    assessmentId: string;
    /**
     *  The unique identifier for the control.
     */
    controlId: string;
    /**
     *  The unique identifier for the control set.
     */
    controlSetId: string;
}
export declare class UpdateAssessmentControlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateAssessmentControlResponse?: shared.UpdateAssessmentControlResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
