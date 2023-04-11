import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListChannelsRequestBody extends SpeakeasyBase {
    /**
     * Filters the channel list to match the specified name.
     */
    filterByName?: string;
    /**
     * Filters the channel list to match the specified recording-configuration ARN.
     */
    filterByRecordingConfigurationArn?: string;
    /**
     * Maximum number of channels to return. Default: 100.
     */
    maxResults?: number;
    /**
     * The first channel to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
     */
    nextToken?: string;
}
export declare class ListChannelsRequest extends SpeakeasyBase {
    requestBody: ListChannelsRequestBody;
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
export declare class ListChannelsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    listChannelsResponse?: shared.ListChannelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
