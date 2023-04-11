import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListImageBuildVersionsRequestBody extends SpeakeasyBase {
    /**
     * <p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>
     */
    filters?: shared.Filter[];
    /**
     * The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.
     */
    imageVersionArn: string;
    /**
     * The maximum items to return in a request.
     */
    maxResults?: number;
    /**
     * A token to specify where to start paginating. This is the NextToken from a previously truncated response.
     */
    nextToken?: string;
}
export declare class ListImageBuildVersionsRequest extends SpeakeasyBase {
    requestBody: ListImageBuildVersionsRequestBody;
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
export declare class ListImageBuildVersionsResponse extends SpeakeasyBase {
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
    listImageBuildVersionsResponse?: shared.ListImageBuildVersionsResponse;
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
