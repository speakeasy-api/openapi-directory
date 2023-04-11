import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportLambdaFunctionRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportLambdaFunctionRecommendations = "ComputeOptimizerService.ExportLambdaFunctionRecommendations"
}
export declare class ExportLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
    exportLambdaFunctionRecommendationsRequest: shared.ExportLambdaFunctionRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportLambdaFunctionRecommendationsXAmzTargetEnum;
}
export declare class ExportLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    exportLambdaFunctionRecommendationsResponse?: shared.ExportLambdaFunctionRecommendationsResponse;
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
