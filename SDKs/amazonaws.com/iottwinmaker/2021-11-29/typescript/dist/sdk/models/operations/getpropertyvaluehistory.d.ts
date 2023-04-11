import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that specifies how to interpolate data in a list.
 */
export declare class GetPropertyValueHistoryRequestBodyInterpolation extends SpeakeasyBase {
    interpolationType?: shared.InterpolationTypeEnum;
    intervalInSeconds?: number;
}
/**
 * The time direction to use in the result order.
 */
export declare enum GetPropertyValueHistoryRequestBodyOrderByTimeEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class GetPropertyValueHistoryRequestBody extends SpeakeasyBase {
    /**
     * The name of the component.
     */
    componentName?: string;
    /**
     * The ID of the component type.
     */
    componentTypeId?: string;
    /**
     * supports epoch seconds value
     */
    endDateTime?: Date;
    /**
     * Timestamp represented in ISO 8601 format
     */
    endTime?: string;
    /**
     * The ID of the entity.
     */
    entityId?: string;
    /**
     * An object that specifies how to interpolate data in a list.
     */
    interpolation?: GetPropertyValueHistoryRequestBodyInterpolation;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
     */
    maxResults?: number;
    /**
     * The string that specifies the next page of results.
     */
    nextToken?: string;
    /**
     * The time direction to use in the result order.
     */
    orderByTime?: GetPropertyValueHistoryRequestBodyOrderByTimeEnum;
    /**
     * A list of objects that filter the property value history request.
     */
    propertyFilters?: shared.PropertyFilter[];
    /**
     * A list of properties whose value histories the request retrieves.
     */
    selectedProperties: string[];
    /**
     * supports epoch seconds value
     */
    startDateTime?: Date;
    /**
     * Timestamp represented in ISO 8601 format
     */
    startTime?: string;
}
export declare class GetPropertyValueHistoryRequest extends SpeakeasyBase {
    requestBody: GetPropertyValueHistoryRequestBody;
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
     * The ID of the workspace.
     */
    workspaceId: string;
}
export declare class GetPropertyValueHistoryResponse extends SpeakeasyBase {
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
    getPropertyValueHistoryResponse?: shared.GetPropertyValueHistoryResponse;
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
