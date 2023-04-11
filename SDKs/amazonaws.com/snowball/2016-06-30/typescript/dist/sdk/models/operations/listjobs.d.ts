import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListJobsXAmzTargetEnum {
    AWSIESnowballJobManagementServiceListJobs = "AWSIESnowballJobManagementService.ListJobs"
}
export declare class ListJobsRequest extends SpeakeasyBase {
    listJobsRequest: shared.ListJobsRequest;
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
    xAmzTarget: ListJobsXAmzTargetEnum;
}
export declare class ListJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listJobsResult?: shared.ListJobsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
