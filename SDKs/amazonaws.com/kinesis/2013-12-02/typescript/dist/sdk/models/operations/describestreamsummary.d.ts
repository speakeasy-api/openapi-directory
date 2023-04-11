import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStreamSummaryXAmzTargetEnum {
    Kinesis20131202DescribeStreamSummary = "Kinesis_20131202.DescribeStreamSummary"
}
export declare class DescribeStreamSummaryRequest extends SpeakeasyBase {
    describeStreamSummaryInput: shared.DescribeStreamSummaryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamSummaryXAmzTargetEnum;
}
export declare class DescribeStreamSummaryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeStreamSummaryOutput?: shared.DescribeStreamSummaryOutput;
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
