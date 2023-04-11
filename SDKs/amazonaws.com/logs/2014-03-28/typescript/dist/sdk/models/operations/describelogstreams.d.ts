import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLogStreamsXAmzTargetEnum {
    Logs20140328DescribeLogStreams = "Logs_20140328.DescribeLogStreams"
}
export declare class DescribeLogStreamsRequest extends SpeakeasyBase {
    describeLogStreamsRequest: shared.DescribeLogStreamsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLogStreamsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeLogStreamsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLogStreamsResponse?: shared.DescribeLogStreamsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
