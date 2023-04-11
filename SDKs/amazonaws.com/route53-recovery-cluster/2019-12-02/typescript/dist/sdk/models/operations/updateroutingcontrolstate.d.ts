import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRoutingControlStateXAmzTargetEnum {
    ToggleCustomerAPIUpdateRoutingControlState = "ToggleCustomerAPI.UpdateRoutingControlState"
}
export declare class UpdateRoutingControlStateRequest extends SpeakeasyBase {
    updateRoutingControlStateRequest: shared.UpdateRoutingControlStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRoutingControlStateXAmzTargetEnum;
}
export declare class UpdateRoutingControlStateResponse extends SpeakeasyBase {
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
     * EndpointTemporarilyUnavailableException
     */
    endpointTemporarilyUnavailableException?: any;
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
     * Success
     */
    updateRoutingControlStateResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
