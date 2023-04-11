import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRuleGroupsNamespacesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Maximum results to return in response (default=100, maximum=1000).
     */
    maxResults?: number;
    /**
     * Optional filter for rule groups namespace name. Only the rule groups namespace that begin with this value will be returned.
     */
    name?: string;
    /**
     * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListRuleGroupsNamespaces request.
     */
    nextToken?: string;
    /**
     * The ID of the workspace.
     */
    workspaceId: string;
}
export declare class ListRuleGroupsNamespacesResponse extends SpeakeasyBase {
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
    listRuleGroupsNamespacesResponse?: shared.ListRuleGroupsNamespacesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
