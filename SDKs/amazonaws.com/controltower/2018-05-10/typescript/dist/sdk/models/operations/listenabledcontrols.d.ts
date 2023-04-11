import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEnabledControlsRequestBody extends SpeakeasyBase {
    /**
     * How many results to return per API call.
     */
    maxResults?: number;
    /**
     * The token to continue the list from a previous API call with the same parameters.
     */
    nextToken?: string;
    /**
     * The ARN of the organizational unit.
     */
    targetIdentifier: string;
}
export declare class ListEnabledControlsRequest extends SpeakeasyBase {
    requestBody: ListEnabledControlsRequestBody;
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
export declare class ListEnabledControlsResponse extends SpeakeasyBase {
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
    listEnabledControlsOutput?: shared.ListEnabledControlsOutput;
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
