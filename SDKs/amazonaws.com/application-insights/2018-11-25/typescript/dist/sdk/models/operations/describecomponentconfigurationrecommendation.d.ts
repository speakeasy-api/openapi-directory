import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeComponentConfigurationRecommendationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeComponentConfigurationRecommendation = "EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation"
}
export declare class DescribeComponentConfigurationRecommendationRequest extends SpeakeasyBase {
    describeComponentConfigurationRecommendationRequest: shared.DescribeComponentConfigurationRecommendationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComponentConfigurationRecommendationXAmzTargetEnum;
}
export declare class DescribeComponentConfigurationRecommendationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeComponentConfigurationRecommendationResponse?: shared.DescribeComponentConfigurationRecommendationResponse;
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
