import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEndpointXAmzTargetEnum {
    Comprehend20171127DeleteEndpoint = "Comprehend_20171127.DeleteEndpoint"
}
export declare class DeleteEndpointRequest extends SpeakeasyBase {
    deleteEndpointRequest: shared.DeleteEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointXAmzTargetEnum;
}
export declare class DeleteEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEndpointResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
