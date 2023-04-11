import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplicationTasksXAmzTargetEnum {
    AmazonDMSv20160101DescribeReplicationTasks = "AmazonDMSv20160101.DescribeReplicationTasks"
}
export declare class DescribeReplicationTasksRequest extends SpeakeasyBase {
    describeReplicationTasksMessage: shared.DescribeReplicationTasksMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplicationTasksXAmzTargetEnum;
}
export declare class DescribeReplicationTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationTasksResponse?: shared.DescribeReplicationTasksResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
