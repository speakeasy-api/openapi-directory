import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEndpointConfigXAmzTargetEnum {
    SageMakerDeleteEndpointConfig = "SageMaker.DeleteEndpointConfig"
}
export declare class DeleteEndpointConfigRequest extends SpeakeasyBase {
    deleteEndpointConfigInput: shared.DeleteEndpointConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointConfigXAmzTargetEnum;
}
export declare class DeleteEndpointConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
