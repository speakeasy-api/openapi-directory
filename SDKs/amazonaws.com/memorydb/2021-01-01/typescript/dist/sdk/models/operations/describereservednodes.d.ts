import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReservedNodesXAmzTargetEnum {
    AmazonMemoryDBDescribeReservedNodes = "AmazonMemoryDB.DescribeReservedNodes"
}
export declare class DescribeReservedNodesRequest extends SpeakeasyBase {
    describeReservedNodesRequest: shared.DescribeReservedNodesRequest;
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
    xAmzTarget: DescribeReservedNodesXAmzTargetEnum;
}
export declare class DescribeReservedNodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReservedNodesResponse?: shared.DescribeReservedNodesResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ReservedNodeNotFoundFault
     */
    reservedNodeNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}
