import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStreamConsumerXAmzTargetEnum {
    Kinesis20131202DescribeStreamConsumer = "Kinesis_20131202.DescribeStreamConsumer"
}
export declare class DescribeStreamConsumerRequest extends SpeakeasyBase {
    describeStreamConsumerInput: shared.DescribeStreamConsumerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamConsumerXAmzTargetEnum;
}
export declare class DescribeStreamConsumerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStreamConsumerOutput?: shared.DescribeStreamConsumerOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
