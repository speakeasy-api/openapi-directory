import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListContributorInsightsXAmzTargetEnum {
    DynamoDB20120810ListContributorInsights = "DynamoDB_20120810.ListContributorInsights"
}
export declare class ListContributorInsightsRequest extends SpeakeasyBase {
    listContributorInsightsInput: shared.ListContributorInsightsInput;
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
    xAmzTarget: ListContributorInsightsXAmzTargetEnum;
}
export declare class ListContributorInsightsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listContributorInsightsOutput?: shared.ListContributorInsightsOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
