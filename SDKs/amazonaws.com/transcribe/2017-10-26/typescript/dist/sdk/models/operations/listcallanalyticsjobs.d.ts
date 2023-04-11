import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCallAnalyticsJobsXAmzTargetEnum {
    TranscribeListCallAnalyticsJobs = "Transcribe.ListCallAnalyticsJobs"
}
export declare class ListCallAnalyticsJobsRequest extends SpeakeasyBase {
    listCallAnalyticsJobsRequest: shared.ListCallAnalyticsJobsRequest;
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
    xAmzTarget: ListCallAnalyticsJobsXAmzTargetEnum;
}
export declare class ListCallAnalyticsJobsResponse extends SpeakeasyBase {
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
    listCallAnalyticsJobsResponse?: shared.ListCallAnalyticsJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
