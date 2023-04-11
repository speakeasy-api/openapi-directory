import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCallAnalyticsCategoriesXAmzTargetEnum {
    TranscribeListCallAnalyticsCategories = "Transcribe.ListCallAnalyticsCategories"
}
export declare class ListCallAnalyticsCategoriesRequest extends SpeakeasyBase {
    listCallAnalyticsCategoriesRequest: shared.ListCallAnalyticsCategoriesRequest;
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
    xAmzTarget: ListCallAnalyticsCategoriesXAmzTargetEnum;
}
export declare class ListCallAnalyticsCategoriesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listCallAnalyticsCategoriesResponse?: shared.ListCallAnalyticsCategoriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
