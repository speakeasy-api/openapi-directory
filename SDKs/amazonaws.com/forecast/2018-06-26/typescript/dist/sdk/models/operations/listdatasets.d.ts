import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDatasetsXAmzTargetEnum {
    AmazonForecastListDatasets = "AmazonForecast.ListDatasets"
}
export declare class ListDatasetsRequest extends SpeakeasyBase {
    listDatasetsRequest: shared.ListDatasetsRequest;
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
    xAmzTarget: ListDatasetsXAmzTargetEnum;
}
export declare class ListDatasetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listDatasetsResponse?: shared.ListDatasetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
