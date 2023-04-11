import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLogGroupsXAmzTargetEnum {
    Logs20140328DescribeLogGroups = "Logs_20140328.DescribeLogGroups"
}
export declare class DescribeLogGroupsRequest extends SpeakeasyBase {
    describeLogGroupsRequest: shared.DescribeLogGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLogGroupsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeLogGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLogGroupsResponse?: shared.DescribeLogGroupsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
