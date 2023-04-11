import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Options for filtering API keys.
 */
export declare class ListKeysRequestBodyFilter extends SpeakeasyBase {
    keyStatus?: shared.StatusEnum;
}
export declare class ListKeysRequestBody extends SpeakeasyBase {
    /**
     * Options for filtering API keys.
     */
    filter?: ListKeysRequestBodyFilter;
    /**
     * <p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>
     */
    maxResults?: number;
    /**
     * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>
     */
    nextToken?: string;
}
export declare class ListKeysRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListKeysRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListKeysResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listKeysResponse?: shared.ListKeysResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
