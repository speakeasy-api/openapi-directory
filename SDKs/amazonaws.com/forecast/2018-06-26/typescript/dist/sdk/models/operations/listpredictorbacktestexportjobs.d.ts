import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPredictorBacktestExportJobsXAmzTargetEnum {
    AmazonForecastListPredictorBacktestExportJobs = "AmazonForecast.ListPredictorBacktestExportJobs"
}
export declare class ListPredictorBacktestExportJobsRequest extends SpeakeasyBase {
    listPredictorBacktestExportJobsRequest: shared.ListPredictorBacktestExportJobsRequest;
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
    xAmzTarget: ListPredictorBacktestExportJobsXAmzTargetEnum;
}
export declare class ListPredictorBacktestExportJobsResponse extends SpeakeasyBase {
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
    listPredictorBacktestExportJobsResponse?: shared.ListPredictorBacktestExportJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
