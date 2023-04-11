import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRoutingControlRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the routing control.
     */
    routingControlArn: string;
    /**
     * The name of the routing control.
     */
    routingControlName: string;
}
export declare class UpdateRoutingControlRequest extends SpeakeasyBase {
    requestBody: UpdateRoutingControlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRoutingControlResponse extends SpeakeasyBase {
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
    updateRoutingControlResponse?: shared.UpdateRoutingControlResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
