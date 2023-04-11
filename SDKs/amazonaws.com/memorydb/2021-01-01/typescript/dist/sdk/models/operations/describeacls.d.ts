import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeACLsXAmzTargetEnum {
    AmazonMemoryDBDescribeACLs = "AmazonMemoryDB.DescribeACLs"
}
export declare class DescribeACLsRequest extends SpeakeasyBase {
    describeACLsRequest: shared.DescribeACLsRequest;
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
    xAmzTarget: DescribeACLsXAmzTargetEnum;
}
export declare class DescribeACLsResponse extends SpeakeasyBase {
    /**
     * ACLNotFoundFault
     */
    aclNotFoundFault?: any;
    contentType: string;
    /**
     * Success
     */
    describeACLsResponse?: shared.DescribeACLsResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
