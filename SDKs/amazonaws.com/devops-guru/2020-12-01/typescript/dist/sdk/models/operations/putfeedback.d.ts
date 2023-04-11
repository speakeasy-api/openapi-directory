import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Information about insight feedback received from a customer.
 */
export declare class PutFeedbackRequestBodyInsightFeedback extends SpeakeasyBase {
    feedback?: shared.InsightFeedbackOptionEnum;
    id?: string;
}
export declare class PutFeedbackRequestBody extends SpeakeasyBase {
    /**
     *  Information about insight feedback received from a customer.
     */
    insightFeedback?: PutFeedbackRequestBodyInsightFeedback;
}
export declare class PutFeedbackRequest extends SpeakeasyBase {
    requestBody: PutFeedbackRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFeedbackResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putFeedbackResponse?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
