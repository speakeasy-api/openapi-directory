import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum QueryXAmzTargetEnum {
    DynamoDB20120810Query = "DynamoDB_20120810.Query"
}
export declare class QueryRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    exclusiveStartKey?: string;
    /**
     * Pagination limit
     */
    limit?: string;
    queryInput: shared.QueryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryXAmzTargetEnum;
}
export declare class QueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * Success
     */
    queryOutput?: shared.QueryOutput;
    /**
     * RequestLimitExceeded
     */
    requestLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
