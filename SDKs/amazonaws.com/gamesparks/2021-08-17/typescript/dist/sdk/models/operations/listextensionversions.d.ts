import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListExtensionVersionsRequest extends SpeakeasyBase {
    /**
     * <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
     */
    maxResults?: number;
    /**
     * The name of the extension.
     */
    name: string;
    /**
     * The namespace (qualifier) of the extension.
     */
    namespace: string;
    /**
     * <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListExtensionVersionsResponse extends SpeakeasyBase {
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
    listExtensionVersionsResult?: shared.ListExtensionVersionsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
