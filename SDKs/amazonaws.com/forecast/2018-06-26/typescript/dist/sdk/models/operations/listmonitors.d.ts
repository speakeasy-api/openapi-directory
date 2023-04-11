import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMonitorsXAmzTargetEnum {
    AmazonForecastListMonitors = "AmazonForecast.ListMonitors"
}
export declare class ListMonitorsRequest extends SpeakeasyBase {
    listMonitorsRequest: shared.ListMonitorsRequest;
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
    xAmzTarget: ListMonitorsXAmzTargetEnum;
}
export declare class ListMonitorsResponse extends SpeakeasyBase {
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
    listMonitorsResponse?: shared.ListMonitorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
