import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExplainabilityExportsXAmzTargetEnum {
    AmazonForecastListExplainabilityExports = "AmazonForecast.ListExplainabilityExports"
}
export declare class ListExplainabilityExportsRequest extends SpeakeasyBase {
    listExplainabilityExportsRequest: shared.ListExplainabilityExportsRequest;
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
    xAmzTarget: ListExplainabilityExportsXAmzTargetEnum;
}
export declare class ListExplainabilityExportsResponse extends SpeakeasyBase {
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
    listExplainabilityExportsResponse?: shared.ListExplainabilityExportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
