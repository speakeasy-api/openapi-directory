import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeQueriesXAmzTargetEnum {
    Logs20140328DescribeQueries = "Logs_20140328.DescribeQueries"
}
export declare class DescribeQueriesRequest extends SpeakeasyBase {
    describeQueriesRequest: shared.DescribeQueriesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeQueriesXAmzTargetEnum;
}
export declare class DescribeQueriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeQueriesResponse?: shared.DescribeQueriesResponse;
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
