import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of bucketed aggregation performed.
 */
export declare class GetBucketsAggregationRequestBodyBucketsAggregationType extends SpeakeasyBase {
    termsAggregation?: shared.TermsAggregation;
}
export declare class GetBucketsAggregationRequestBody extends SpeakeasyBase {
    /**
     * The aggregation field.
     */
    aggregationField: string;
    /**
     * The type of bucketed aggregation performed.
     */
    bucketsAggregationType: GetBucketsAggregationRequestBodyBucketsAggregationType;
    /**
     * The name of the index to search.
     */
    indexName?: string;
    /**
     * The search query string.
     */
    queryString: string;
    /**
     * The version of the query.
     */
    queryVersion?: string;
}
export declare class GetBucketsAggregationRequest extends SpeakeasyBase {
    requestBody: GetBucketsAggregationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBucketsAggregationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBucketsAggregationResponse?: shared.GetBucketsAggregationResponse;
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
