import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListForecastExportJobsXAmzTargetEnum {
    AmazonForecastListForecastExportJobs = "AmazonForecast.ListForecastExportJobs"
}
export declare class ListForecastExportJobsRequest extends SpeakeasyBase {
    listForecastExportJobsRequest: shared.ListForecastExportJobsRequest;
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
    xAmzTarget: ListForecastExportJobsXAmzTargetEnum;
}
export declare class ListForecastExportJobsResponse extends SpeakeasyBase {
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
    listForecastExportJobsResponse?: shared.ListForecastExportJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
