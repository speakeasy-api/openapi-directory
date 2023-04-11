import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeMappedResourceConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * The token to provide in your next request, to get another batch of results.
     */
    nextToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the stream.
     */
    streamARN?: string;
    /**
     * The name of the stream.
     */
    streamName?: string;
}
export declare class DescribeMappedResourceConfigurationRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: DescribeMappedResourceConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMappedResourceConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    describeMappedResourceConfigurationOutput?: shared.DescribeMappedResourceConfigurationOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
