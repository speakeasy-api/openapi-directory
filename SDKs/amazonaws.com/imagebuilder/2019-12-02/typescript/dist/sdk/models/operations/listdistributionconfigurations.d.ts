import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDistributionConfigurationsRequestBody extends SpeakeasyBase {
    /**
     * You can filter on <code>name</code> to streamline results.
     */
    filters?: shared.Filter[];
    /**
     * The maximum items to return in a request.
     */
    maxResults?: number;
    /**
     * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
     */
    nextToken?: string;
}
export declare class ListDistributionConfigurationsRequest extends SpeakeasyBase {
    requestBody: ListDistributionConfigurationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDistributionConfigurationsResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InvalidPaginationTokenException
     */
    invalidPaginationTokenException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listDistributionConfigurationsResponse?: shared.ListDistributionConfigurationsResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
