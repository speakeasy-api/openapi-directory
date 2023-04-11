import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRecommendersXAmzTargetEnum {
    AmazonPersonalizeListRecommenders = "AmazonPersonalize.ListRecommenders"
}
export declare class ListRecommendersRequest extends SpeakeasyBase {
    listRecommendersRequest: shared.ListRecommendersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRecommendersXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListRecommendersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listRecommendersResponse?: shared.ListRecommendersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
