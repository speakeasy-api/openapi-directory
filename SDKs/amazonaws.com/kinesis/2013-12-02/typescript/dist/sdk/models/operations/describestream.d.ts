import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStreamXAmzTargetEnum {
    Kinesis20131202DescribeStream = "Kinesis_20131202.DescribeStream"
}
export declare class DescribeStreamRequest extends SpeakeasyBase {
    describeStreamInput: shared.DescribeStreamInput;
    /**
     * Pagination token
     */
    exclusiveStartShardId?: string;
    /**
     * Pagination limit
     */
    limit?: string;
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
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeStreamOutput?: shared.DescribeStreamOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
