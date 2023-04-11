import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSinksRequestBody extends SpeakeasyBase {
    /**
     * Limits the number of returned links to the specified number.
     */
    maxResults?: number;
    /**
     * The token for the next set of items to return. You received this token from a previous call.
     */
    nextToken?: string;
}
export declare class ListSinksRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListSinksRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSinksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceFault
     */
    internalServiceFault?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listSinksOutput?: shared.ListSinksOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
