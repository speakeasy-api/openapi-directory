import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSubnetGroupsXAmzTargetEnum {
    AmazonMemoryDBDescribeSubnetGroups = "AmazonMemoryDB.DescribeSubnetGroups"
}
export declare class DescribeSubnetGroupsRequest extends SpeakeasyBase {
    describeSubnetGroupsRequest: shared.DescribeSubnetGroupsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubnetGroupsXAmzTargetEnum;
}
export declare class DescribeSubnetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSubnetGroupsResponse?: shared.DescribeSubnetGroupsResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SubnetGroupNotFoundFault
     */
    subnetGroupNotFoundFault?: any;
}
