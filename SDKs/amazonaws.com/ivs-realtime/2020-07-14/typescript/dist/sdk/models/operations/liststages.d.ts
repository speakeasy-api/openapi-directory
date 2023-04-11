import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListStagesRequestBody extends SpeakeasyBase {
    /**
     * Maximum number of results to return. Default: 50.
     */
    maxResults?: number;
    /**
     * The first stage to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
     */
    nextToken?: string;
}
export declare class ListStagesRequest extends SpeakeasyBase {
    requestBody: ListStagesRequestBody;
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
export declare class ListStagesResponse extends SpeakeasyBase {
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
    listStagesResponse?: shared.ListStagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
