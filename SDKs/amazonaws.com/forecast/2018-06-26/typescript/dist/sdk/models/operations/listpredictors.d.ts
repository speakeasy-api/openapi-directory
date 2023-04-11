import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPredictorsXAmzTargetEnum {
    AmazonForecastListPredictors = "AmazonForecast.ListPredictors"
}
export declare class ListPredictorsRequest extends SpeakeasyBase {
    listPredictorsRequest: shared.ListPredictorsRequest;
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
    xAmzTarget: ListPredictorsXAmzTargetEnum;
}
export declare class ListPredictorsResponse extends SpeakeasyBase {
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
    listPredictorsResponse?: shared.ListPredictorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
