import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The status of the control set that's being updated.
 */
export declare enum UpdateAssessmentControlSetStatusRequestBodyStatusEnum {
    Active = "ACTIVE",
    UnderReview = "UNDER_REVIEW",
    Reviewed = "REVIEWED"
}
export declare class UpdateAssessmentControlSetStatusRequestBody extends SpeakeasyBase {
    /**
     *  The comment that's related to the status update.
     */
    comment: string;
    /**
     *  The status of the control set that's being updated.
     */
    status: UpdateAssessmentControlSetStatusRequestBodyStatusEnum;
}
export declare class UpdateAssessmentControlSetStatusRequest extends SpeakeasyBase {
    requestBody: UpdateAssessmentControlSetStatusRequestBody;
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
     *  The unique identifier for the control set.
     */
    controlSetId: string;
}
export declare class UpdateAssessmentControlSetStatusResponse extends SpeakeasyBase {
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
    updateAssessmentControlSetStatusResponse?: shared.UpdateAssessmentControlSetStatusResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
