import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWhatIfForecastExportsXAmzTargetEnum {
    AmazonForecastListWhatIfForecastExports = "AmazonForecast.ListWhatIfForecastExports"
}
export declare class ListWhatIfForecastExportsRequest extends SpeakeasyBase {
    listWhatIfForecastExportsRequest: shared.ListWhatIfForecastExportsRequest;
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
    xAmzTarget: ListWhatIfForecastExportsXAmzTargetEnum;
}
export declare class ListWhatIfForecastExportsResponse extends SpeakeasyBase {
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
    listWhatIfForecastExportsResponse?: shared.ListWhatIfForecastExportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
