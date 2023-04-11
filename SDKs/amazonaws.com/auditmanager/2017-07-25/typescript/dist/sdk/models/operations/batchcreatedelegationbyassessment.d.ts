import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchCreateDelegationByAssessmentRequestBody extends SpeakeasyBase {
    /**
     *  The API request to batch create delegations in Audit Manager.
     */
    createDelegationRequests: shared.CreateDelegationRequest[];
}
export declare class BatchCreateDelegationByAssessmentRequest extends SpeakeasyBase {
    requestBody: BatchCreateDelegationByAssessmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The identifier for the assessment.
     */
    assessmentId: string;
}
export declare class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchCreateDelegationByAssessmentResponse?: shared.BatchCreateDelegationByAssessmentResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
