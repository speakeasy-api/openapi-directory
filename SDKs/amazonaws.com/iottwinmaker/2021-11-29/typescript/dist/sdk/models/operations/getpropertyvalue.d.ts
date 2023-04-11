import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The tabular conditions.
 */
export declare class GetPropertyValueRequestBodyTabularConditions extends SpeakeasyBase {
    orderBy?: shared.OrderBy[];
    propertyFilters?: shared.PropertyFilter[];
}
export declare class GetPropertyValueRequestBody extends SpeakeasyBase {
    /**
     * The name of the component whose property values the operation returns.
     */
    componentName?: string;
    /**
     * The ID of the component type whose property values the operation returns.
     */
    componentTypeId?: string;
    /**
     * The ID of the entity whose property values the operation returns.
     */
    entityId?: string;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
     */
    maxResults?: number;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: string;
    /**
     * The property group name.
     */
    propertyGroupName?: string;
    /**
     * The properties whose values the operation returns.
     */
    selectedProperties: string[];
    /**
     * The tabular conditions.
     */
    tabularConditions?: GetPropertyValueRequestBodyTabularConditions;
}
export declare class GetPropertyValueRequest extends SpeakeasyBase {
    requestBody: GetPropertyValueRequestBody;
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
    /**
     * The ID of the workspace whose values the operation returns.
     */
    workspaceId: string;
}
export declare class GetPropertyValueResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConnectorFailureException
     */
    connectorFailureException?: any;
    /**
     * ConnectorTimeoutException
     */
    connectorTimeoutException?: any;
    contentType: string;
    /**
     * Success
     */
    getPropertyValueResponse?: shared.GetPropertyValueResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
