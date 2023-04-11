import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFeatureTransformationXAmzTargetEnum {
    AmazonPersonalizeDescribeFeatureTransformation = "AmazonPersonalize.DescribeFeatureTransformation"
}
export declare class DescribeFeatureTransformationRequest extends SpeakeasyBase {
    describeFeatureTransformationRequest: shared.DescribeFeatureTransformationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFeatureTransformationXAmzTargetEnum;
}
export declare class DescribeFeatureTransformationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFeatureTransformationResponse?: shared.DescribeFeatureTransformationResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
