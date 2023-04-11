import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRoutingControlStateXAmzTargetEnum {
    ToggleCustomerAPIGetRoutingControlState = "ToggleCustomerAPI.GetRoutingControlState"
}
export declare class GetRoutingControlStateRequest extends SpeakeasyBase {
    getRoutingControlStateRequest: shared.GetRoutingControlStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRoutingControlStateXAmzTargetEnum;
}
export declare class GetRoutingControlStateResponse extends SpeakeasyBase {
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
     * Success
     */
    getRoutingControlStateResponse?: shared.GetRoutingControlStateResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
