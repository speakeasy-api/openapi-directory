import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEnabledStandardsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * <p>The token that is required for pagination. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>.</p> <p>For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</p>
     */
    nextToken?: string;
    /**
     * The list of the standards subscription ARNs for the standards to retrieve.
     */
    standardsSubscriptionArns?: string[];
}
export declare class GetEnabledStandardsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetEnabledStandardsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnabledStandardsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getEnabledStandardsResponse?: shared.GetEnabledStandardsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
