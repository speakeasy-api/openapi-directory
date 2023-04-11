import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListReviewPolicyResultsForHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListReviewPolicyResultsForHIT = "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"
}
export declare class ListReviewPolicyResultsForHITRequest extends SpeakeasyBase {
    listReviewPolicyResultsForHITRequest: shared.ListReviewPolicyResultsForHITRequest;
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
    xAmzTarget: ListReviewPolicyResultsForHITXAmzTargetEnum;
}
export declare class ListReviewPolicyResultsForHITResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listReviewPolicyResultsForHITResponse?: shared.ListReviewPolicyResultsForHITResponse;
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
