import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStreamXAmzTargetEnum {
    DynamoDBStreams20120810DescribeStream = "DynamoDBStreams_20120810.DescribeStream"
}
export declare class DescribeStreamRequest extends SpeakeasyBase {
    describeStreamInput: shared.DescribeStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamXAmzTargetEnum;
}
export declare class DescribeStreamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStreamOutput?: shared.DescribeStreamOutput;
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
