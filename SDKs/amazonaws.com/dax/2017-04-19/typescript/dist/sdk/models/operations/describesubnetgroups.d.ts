import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSubnetGroupsXAmzTargetEnum {
    AmazonDaxv3DescribeSubnetGroups = "AmazonDAXV3.DescribeSubnetGroups"
}
export declare class DescribeSubnetGroupsRequest extends SpeakeasyBase {
    describeSubnetGroupsRequest: shared.DescribeSubnetGroupsRequest;
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
