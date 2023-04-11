import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRoomsRequestBody extends SpeakeasyBase {
    /**
     * Logging-configuration identifier.
     */
    loggingConfigurationIdentifier?: string;
    /**
     * Maximum number of rooms to return. Default: 50.
     */
    maxResults?: number;
    /**
     * Filters the list to match the specified message review handler URI.
     */
    messageReviewHandlerUri?: string;
    /**
     * Filters the list to match the specified room name.
     */
    name?: string;
    /**
     * The first room to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
     */
    nextToken?: string;
}
export declare class ListRoomsRequest extends SpeakeasyBase {
    requestBody: ListRoomsRequestBody;
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
export declare class ListRoomsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listRoomsResponse?: shared.ListRoomsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
