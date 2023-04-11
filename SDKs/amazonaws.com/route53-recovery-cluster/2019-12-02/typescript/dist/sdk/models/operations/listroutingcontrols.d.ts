import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRoutingControlsXAmzTargetEnum {
    ToggleCustomerAPIListRoutingControls = "ToggleCustomerAPI.ListRoutingControls"
}
export declare class ListRoutingControlsRequest extends SpeakeasyBase {
    listRoutingControlsRequest: shared.ListRoutingControlsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRoutingControlsXAmzTargetEnum;
}
export declare class ListRoutingControlsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EndpointTemporarilyUnavailableException
     */
    endpointTemporarilyUnavailableException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listRoutingControlsResponse?: shared.ListRoutingControlsResponse;
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
