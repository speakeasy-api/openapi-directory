import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPercentilesRequestBody extends SpeakeasyBase {
    /**
     * The field to aggregate.
     */
    aggregationField?: string;
    /**
     * The name of the index to search.
     */
    indexName?: string;
    /**
     * The percentile groups returned.
     */
    percents?: number[];
    /**
     * The search query string.
     */
    queryString: string;
    /**
     * The query version.
     */
    queryVersion?: string;
}
export declare class GetPercentilesRequest extends SpeakeasyBase {
    requestBody: GetPercentilesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPercentilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPercentilesResponse?: shared.GetPercentilesResponse;
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
