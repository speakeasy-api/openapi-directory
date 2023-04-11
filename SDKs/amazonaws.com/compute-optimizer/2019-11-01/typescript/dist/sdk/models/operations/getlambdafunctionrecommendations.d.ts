import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLambdaFunctionRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetLambdaFunctionRecommendations = "ComputeOptimizerService.GetLambdaFunctionRecommendations"
}
export declare class GetLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
    getLambdaFunctionRecommendationsRequest: shared.GetLambdaFunctionRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLambdaFunctionRecommendationsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getLambdaFunctionRecommendationsResponse?: shared.GetLambdaFunctionRecommendationsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MissingAuthenticationToken
     */
    missingAuthenticationToken?: any;
    /**
     * OptInRequiredException
     */
    optInRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
