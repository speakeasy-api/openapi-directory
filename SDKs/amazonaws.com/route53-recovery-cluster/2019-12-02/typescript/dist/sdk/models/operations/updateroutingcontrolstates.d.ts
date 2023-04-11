import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRoutingControlStatesXAmzTargetEnum {
    ToggleCustomerAPIUpdateRoutingControlStates = "ToggleCustomerAPI.UpdateRoutingControlStates"
}
export declare class UpdateRoutingControlStatesRequest extends SpeakeasyBase {
    updateRoutingControlStatesRequest: shared.UpdateRoutingControlStatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRoutingControlStatesXAmzTargetEnum;
}
export declare class UpdateRoutingControlStatesResponse extends SpeakeasyBase {
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
     * ServiceLimitExceededException
     */
    serviceLimitExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateRoutingControlStatesResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
