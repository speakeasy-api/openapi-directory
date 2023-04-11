import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExplainabilitiesXAmzTargetEnum {
    AmazonForecastListExplainabilities = "AmazonForecast.ListExplainabilities"
}
export declare class ListExplainabilitiesRequest extends SpeakeasyBase {
    listExplainabilitiesRequest: shared.ListExplainabilitiesRequest;
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
    xAmzTarget: ListExplainabilitiesXAmzTargetEnum;
}
export declare class ListExplainabilitiesResponse extends SpeakeasyBase {
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
    listExplainabilitiesResponse?: shared.ListExplainabilitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
