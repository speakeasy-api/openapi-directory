import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEc2InstanceRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetEc2InstanceRecommendations = "ComputeOptimizerService.GetEC2InstanceRecommendations"
}
export declare class GetEc2InstanceRecommendationsRequest extends SpeakeasyBase {
    getEc2InstanceRecommendationsRequest: shared.GetEc2InstanceRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEc2InstanceRecommendationsXAmzTargetEnum;
}
export declare class GetEc2InstanceRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEc2InstanceRecommendationsResponse?: shared.GetEc2InstanceRecommendationsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
