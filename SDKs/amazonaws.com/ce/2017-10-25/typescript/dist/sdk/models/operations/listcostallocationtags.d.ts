import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCostAllocationTagsXAmzTargetEnum {
    AWSInsightsIndexServiceListCostAllocationTags = "AWSInsightsIndexService.ListCostAllocationTags"
}
export declare class ListCostAllocationTagsRequest extends SpeakeasyBase {
    listCostAllocationTagsRequest: shared.ListCostAllocationTagsRequest;
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
    xAmzTarget: ListCostAllocationTagsXAmzTargetEnum;
}
export declare class ListCostAllocationTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listCostAllocationTagsResponse?: shared.ListCostAllocationTagsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
