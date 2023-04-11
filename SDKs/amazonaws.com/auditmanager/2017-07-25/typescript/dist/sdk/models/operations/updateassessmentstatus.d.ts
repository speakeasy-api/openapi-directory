import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The current status of the assessment.
 */
export declare enum UpdateAssessmentStatusRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class UpdateAssessmentStatusRequestBody extends SpeakeasyBase {
    /**
     *  The current status of the assessment.
     */
    status: UpdateAssessmentStatusRequestBodyStatusEnum;
}
export declare class UpdateAssessmentStatusRequest extends SpeakeasyBase {
    requestBody: UpdateAssessmentStatusRequestBody;
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
}
export declare class UpdateAssessmentStatusResponse extends SpeakeasyBase {
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateAssessmentStatusResponse?: shared.UpdateAssessmentStatusResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
