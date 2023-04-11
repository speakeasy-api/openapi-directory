import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPlaybackKeyPairsRequestBody extends SpeakeasyBase {
    /**
     * Maximum number of key pairs to return. Default: your service quota or 100, whichever is smaller.
     */
    maxResults?: number;
    /**
     * The first key pair to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
     */
    nextToken?: string;
}
export declare class ListPlaybackKeyPairsRequest extends SpeakeasyBase {
    requestBody: ListPlaybackKeyPairsRequestBody;
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
export declare class ListPlaybackKeyPairsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listPlaybackKeyPairsResponse?: shared.ListPlaybackKeyPairsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
