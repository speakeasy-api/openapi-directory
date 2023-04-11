import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatisticsRequestBody extends SpeakeasyBase {
    /**
     * The aggregation field name.
     */
    aggregationField?: string;
    /**
     * The name of the index to search. The default value is <code>AWS_Things</code>.
     */
    indexName?: string;
    /**
     * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your Amazon Web Services account.
     */
    queryString: string;
    /**
     * The version of the query used to search.
     */
    queryVersion?: string;
}
export declare class GetStatisticsRequest extends SpeakeasyBase {
    requestBody: GetStatisticsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getStatisticsResponse?: shared.GetStatisticsResponse;
    /**
     * IndexNotReadyException
     */
    indexNotReadyException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidAggregationException
     */
    invalidAggregationException?: any;
    /**
     * InvalidQueryException
     */
    invalidQueryException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
