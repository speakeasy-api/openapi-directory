import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLoggingConfigurationsRequestBody extends SpeakeasyBase {
    /**
     * Maximum number of logging configurations to return. Default: 50.
     */
    maxResults?: number;
    /**
     * The first logging configurations to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
     */
    nextToken?: string;
}
export declare class ListLoggingConfigurationsRequest extends SpeakeasyBase {
    requestBody: ListLoggingConfigurationsRequestBody;
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
export declare class ListLoggingConfigurationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listLoggingConfigurationsResponse?: shared.ListLoggingConfigurationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
