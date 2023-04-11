import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDB20120810DescribeKinesisStreamingDestination = "DynamoDB_20120810.DescribeKinesisStreamingDestination"
}
export declare class DescribeKinesisStreamingDestinationRequest extends SpeakeasyBase {
    describeKinesisStreamingDestinationInput: shared.DescribeKinesisStreamingDestinationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeKinesisStreamingDestinationXAmzTargetEnum;
}
export declare class DescribeKinesisStreamingDestinationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeKinesisStreamingDestinationOutput?: shared.DescribeKinesisStreamingDestinationOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
