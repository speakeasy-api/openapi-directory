import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReviewableHITsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListReviewableHITs = "MTurkRequesterServiceV20170117.ListReviewableHITs"
}
export declare class ListReviewableHITsRequest extends SpeakeasyBase {
    listReviewableHITsRequest: shared.ListReviewableHITsRequest;
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
    xAmzTarget: ListReviewableHITsXAmzTargetEnum;
}
export declare class ListReviewableHITsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listReviewableHITsResponse?: shared.ListReviewableHITsResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
