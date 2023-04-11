import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchEvaluateFeatureRequestBody extends SpeakeasyBase {
    /**
     * An array of structures, where each structure assigns a feature variation to one user session.
     */
    requests: shared.EvaluationRequest[];
}
export declare class BatchEvaluateFeatureRequest extends SpeakeasyBase {
    requestBody: BatchEvaluateFeatureRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ARN of the project that contains the feature being evaluated.
     */
    project: string;
}
export declare class BatchEvaluateFeatureResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchEvaluateFeatureResponse?: shared.BatchEvaluateFeatureResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
