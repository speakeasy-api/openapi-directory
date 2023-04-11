import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMonitorEvaluationsXAmzTargetEnum {
    AmazonForecastListMonitorEvaluations = "AmazonForecast.ListMonitorEvaluations"
}
export declare class ListMonitorEvaluationsRequest extends SpeakeasyBase {
    listMonitorEvaluationsRequest: shared.ListMonitorEvaluationsRequest;
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
    xAmzTarget: ListMonitorEvaluationsXAmzTargetEnum;
}
export declare class ListMonitorEvaluationsResponse extends SpeakeasyBase {
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
    listMonitorEvaluationsResponse?: shared.ListMonitorEvaluationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
