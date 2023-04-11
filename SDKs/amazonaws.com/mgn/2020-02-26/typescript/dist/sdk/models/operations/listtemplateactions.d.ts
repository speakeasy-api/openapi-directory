import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Template post migration custom action filters.
 */
export declare class ListTemplateActionsRequestBodyFilters extends SpeakeasyBase {
    actionIDs?: string[];
}
export declare class ListTemplateActionsRequestBody extends SpeakeasyBase {
    /**
     * Template post migration custom action filters.
     */
    filters?: ListTemplateActionsRequestBodyFilters;
    /**
     * Launch configuration template ID.
     */
    launchConfigurationTemplateID: string;
    /**
     * Maximum amount of items to return when listing template post migration custom actions.
     */
    maxResults?: number;
    /**
     * Next token to use when listing template post migration custom actions.
     */
    nextToken?: string;
}
export declare class ListTemplateActionsRequest extends SpeakeasyBase {
    requestBody: ListTemplateActionsRequestBody;
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
export declare class ListTemplateActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTemplateActionsResponse?: shared.ListTemplateActionsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
