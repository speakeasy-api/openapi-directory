import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDeleteDelegationByAssessmentRequestBody extends SpeakeasyBase {
    /**
     *  The identifiers for the delegations.
     */
    delegationIds: string[];
}
export declare class BatchDeleteDelegationByAssessmentRequest extends SpeakeasyBase {
    requestBody: BatchDeleteDelegationByAssessmentRequestBody;
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
export declare class BatchDeleteDelegationByAssessmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchDeleteDelegationByAssessmentResponse?: shared.BatchDeleteDelegationByAssessmentResponse;
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
