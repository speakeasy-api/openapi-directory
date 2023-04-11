import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplicationInstancesXAmzTargetEnum {
    AmazonDMSv20160101DescribeReplicationInstances = "AmazonDMSv20160101.DescribeReplicationInstances"
}
export declare class DescribeReplicationInstancesRequest extends SpeakeasyBase {
    describeReplicationInstancesMessage: shared.DescribeReplicationInstancesMessage;
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
    xAmzTarget: DescribeReplicationInstancesXAmzTargetEnum;
}
export declare class DescribeReplicationInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationInstancesResponse?: shared.DescribeReplicationInstancesResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
