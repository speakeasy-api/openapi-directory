import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRealtimeEndpointXAmzTargetEnum {
    AmazonML20141212CreateRealtimeEndpoint = "AmazonML_20141212.CreateRealtimeEndpoint"
}
export declare class CreateRealtimeEndpointRequest extends SpeakeasyBase {
    createRealtimeEndpointInput: shared.CreateRealtimeEndpointInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRealtimeEndpointXAmzTargetEnum;
}
export declare class CreateRealtimeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRealtimeEndpointOutput?: shared.CreateRealtimeEndpointOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
