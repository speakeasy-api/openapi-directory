import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOrderableReplicationInstancesXAmzTargetEnum {
    AmazonDMSv20160101DescribeOrderableReplicationInstances = "AmazonDMSv20160101.DescribeOrderableReplicationInstances"
}
export declare class DescribeOrderableReplicationInstancesRequest extends SpeakeasyBase {
    describeOrderableReplicationInstancesMessage: shared.DescribeOrderableReplicationInstancesMessage;
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
    xAmzTarget: DescribeOrderableReplicationInstancesXAmzTargetEnum;
}
export declare class DescribeOrderableReplicationInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOrderableReplicationInstancesResponse?: shared.DescribeOrderableReplicationInstancesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
