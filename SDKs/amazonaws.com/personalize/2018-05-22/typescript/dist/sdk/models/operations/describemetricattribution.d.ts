import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMetricAttributionXAmzTargetEnum {
    AmazonPersonalizeDescribeMetricAttribution = "AmazonPersonalize.DescribeMetricAttribution"
}
export declare class DescribeMetricAttributionRequest extends SpeakeasyBase {
    describeMetricAttributionRequest: shared.DescribeMetricAttributionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMetricAttributionXAmzTargetEnum;
}
export declare class DescribeMetricAttributionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMetricAttributionResponse?: shared.DescribeMetricAttributionResponse;
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
