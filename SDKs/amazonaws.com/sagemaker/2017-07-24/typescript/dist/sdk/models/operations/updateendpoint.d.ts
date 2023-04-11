import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEndpointXAmzTargetEnum {
    SageMakerUpdateEndpoint = "SageMaker.UpdateEndpoint"
}
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    updateEndpointInput: shared.UpdateEndpointInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointXAmzTargetEnum;
}
export declare class UpdateEndpointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * Success
     */
    updateEndpointOutput?: shared.UpdateEndpointOutput;
}
