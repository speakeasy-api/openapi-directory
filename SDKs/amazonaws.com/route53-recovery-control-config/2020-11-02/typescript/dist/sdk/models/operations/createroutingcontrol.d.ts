import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRoutingControlRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request with an action, specify a client token in the request.
     */
    clientToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the cluster that includes the routing control.
     */
    clusterArn: string;
    /**
     * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
     */
    controlPanelArn?: string;
    /**
     * The name of the routing control.
     */
    routingControlName: string;
}
export declare class CreateRoutingControlRequest extends SpeakeasyBase {
    requestBody: CreateRoutingControlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRoutingControlResponse extends SpeakeasyBase {
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
    createRoutingControlResponse?: shared.CreateRoutingControlResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
