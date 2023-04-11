import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMetricAttributionsXAmzTargetEnum {
    AmazonPersonalizeListMetricAttributions = "AmazonPersonalize.ListMetricAttributions"
}
export declare class ListMetricAttributionsRequest extends SpeakeasyBase {
    listMetricAttributionsRequest: shared.ListMetricAttributionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMetricAttributionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListMetricAttributionsResponse extends SpeakeasyBase {
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
    listMetricAttributionsResponse?: shared.ListMetricAttributionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
