import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEventIntegrationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: number;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: string;
}
export declare class ListEventIntegrationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listEventIntegrationsResponse?: shared.ListEventIntegrationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
