import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListForecastsXAmzTargetEnum {
    AmazonForecastListForecasts = "AmazonForecast.ListForecasts"
}
export declare class ListForecastsRequest extends SpeakeasyBase {
    listForecastsRequest: shared.ListForecastsRequest;
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
    xAmzTarget: ListForecastsXAmzTargetEnum;
}
export declare class ListForecastsResponse extends SpeakeasyBase {
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
    listForecastsResponse?: shared.ListForecastsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
