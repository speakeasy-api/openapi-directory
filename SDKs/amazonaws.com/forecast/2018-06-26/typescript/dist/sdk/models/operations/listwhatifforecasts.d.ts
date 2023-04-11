import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWhatIfForecastsXAmzTargetEnum {
    AmazonForecastListWhatIfForecasts = "AmazonForecast.ListWhatIfForecasts"
}
export declare class ListWhatIfForecastsRequest extends SpeakeasyBase {
    listWhatIfForecastsRequest: shared.ListWhatIfForecastsRequest;
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
    xAmzTarget: ListWhatIfForecastsXAmzTargetEnum;
}
export declare class ListWhatIfForecastsResponse extends SpeakeasyBase {
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
    listWhatIfForecastsResponse?: shared.ListWhatIfForecastsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
