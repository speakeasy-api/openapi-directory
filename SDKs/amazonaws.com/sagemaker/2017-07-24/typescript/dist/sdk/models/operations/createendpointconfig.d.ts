import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEndpointConfigXAmzTargetEnum {
    SageMakerCreateEndpointConfig = "SageMaker.CreateEndpointConfig"
}
export declare class CreateEndpointConfigRequest extends SpeakeasyBase {
    createEndpointConfigInput: shared.CreateEndpointConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointConfigXAmzTargetEnum;
}
export declare class CreateEndpointConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEndpointConfigOutput?: shared.CreateEndpointConfigOutput;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
