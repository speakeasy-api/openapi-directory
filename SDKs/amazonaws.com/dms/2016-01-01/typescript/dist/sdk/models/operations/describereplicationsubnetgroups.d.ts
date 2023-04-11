import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplicationSubnetGroupsXAmzTargetEnum {
    AmazonDMSv20160101DescribeReplicationSubnetGroups = "AmazonDMSv20160101.DescribeReplicationSubnetGroups"
}
export declare class DescribeReplicationSubnetGroupsRequest extends SpeakeasyBase {
    describeReplicationSubnetGroupsMessage: shared.DescribeReplicationSubnetGroupsMessage;
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
    xAmzTarget: DescribeReplicationSubnetGroupsXAmzTargetEnum;
}
export declare class DescribeReplicationSubnetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationSubnetGroupsResponse?: shared.DescribeReplicationSubnetGroupsResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
