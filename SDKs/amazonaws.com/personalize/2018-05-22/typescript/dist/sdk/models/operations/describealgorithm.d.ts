import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAlgorithmXAmzTargetEnum {
    AmazonPersonalizeDescribeAlgorithm = "AmazonPersonalize.DescribeAlgorithm"
}
export declare class DescribeAlgorithmRequest extends SpeakeasyBase {
    describeAlgorithmRequest: shared.DescribeAlgorithmRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAlgorithmXAmzTargetEnum;
}
export declare class DescribeAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAlgorithmResponse?: shared.DescribeAlgorithmResponse;
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
