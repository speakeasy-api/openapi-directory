import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDevEndpointXAmzTargetEnum {
    AWSGlueDeleteDevEndpoint = "AWSGlue.DeleteDevEndpoint"
}
export declare class DeleteDevEndpointRequest extends SpeakeasyBase {
    deleteDevEndpointRequest: shared.DeleteDevEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDevEndpointXAmzTargetEnum;
}
export declare class DeleteDevEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDevEndpointResponse?: Record<string, any>;
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
}
