import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReservedNodesOfferingsXAmzTargetEnum {
    AmazonMemoryDBDescribeReservedNodesOfferings = "AmazonMemoryDB.DescribeReservedNodesOfferings"
}
export declare class DescribeReservedNodesOfferingsRequest extends SpeakeasyBase {
    describeReservedNodesOfferingsRequest: shared.DescribeReservedNodesOfferingsRequest;
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
    xAmzTarget: DescribeReservedNodesOfferingsXAmzTargetEnum;
}
export declare class DescribeReservedNodesOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReservedNodesOfferingsResponse?: shared.DescribeReservedNodesOfferingsResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ReservedNodesOfferingNotFoundFault
     */
    reservedNodesOfferingNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}
