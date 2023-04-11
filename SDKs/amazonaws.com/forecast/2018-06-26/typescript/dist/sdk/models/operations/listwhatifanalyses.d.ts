import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWhatIfAnalysesXAmzTargetEnum {
    AmazonForecastListWhatIfAnalyses = "AmazonForecast.ListWhatIfAnalyses"
}
export declare class ListWhatIfAnalysesRequest extends SpeakeasyBase {
    listWhatIfAnalysesRequest: shared.ListWhatIfAnalysesRequest;
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
    xAmzTarget: ListWhatIfAnalysesXAmzTargetEnum;
}
export declare class ListWhatIfAnalysesResponse extends SpeakeasyBase {
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
    listWhatIfAnalysesResponse?: shared.ListWhatIfAnalysesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
