import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEndpointXAmzTargetEnum {
    SageMakerCreateEndpoint = "SageMaker.CreateEndpoint"
}
export declare class CreateEndpointRequest extends SpeakeasyBase {
    createEndpointInput: shared.CreateEndpointInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointXAmzTargetEnum;
}
export declare class CreateEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEndpointOutput?: shared.CreateEndpointOutput;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
