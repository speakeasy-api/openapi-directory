import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetQueryResultsXAmzTargetEnum {
    AmazonAthenaGetQueryResults = "AmazonAthena.GetQueryResults"
}
export declare class GetQueryResultsRequest extends SpeakeasyBase {
    getQueryResultsInput: shared.GetQueryResultsInput;
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
    xAmzTarget: GetQueryResultsXAmzTargetEnum;
}
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getQueryResultsOutput?: shared.GetQueryResultsOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
