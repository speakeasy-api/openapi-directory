import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDevEndpointXAmzTargetEnum {
    AWSGlueUpdateDevEndpoint = "AWSGlue.UpdateDevEndpoint"
}
export declare class UpdateDevEndpointRequest extends SpeakeasyBase {
    updateDevEndpointRequest: shared.UpdateDevEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDevEndpointXAmzTargetEnum;
}
export declare class UpdateDevEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDevEndpointResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
