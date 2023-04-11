import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelCardExportJobsXAmzTargetEnum {
    SageMakerListModelCardExportJobs = "SageMaker.ListModelCardExportJobs"
}
export declare class ListModelCardExportJobsRequest extends SpeakeasyBase {
    listModelCardExportJobsRequest: shared.ListModelCardExportJobsRequest;
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
    xAmzTarget: ListModelCardExportJobsXAmzTargetEnum;
}
export declare class ListModelCardExportJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelCardExportJobsResponse?: shared.ListModelCardExportJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
