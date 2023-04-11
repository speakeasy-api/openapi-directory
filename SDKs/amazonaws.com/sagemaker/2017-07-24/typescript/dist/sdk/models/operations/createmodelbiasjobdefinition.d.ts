import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelBiasJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelBiasJobDefinition = "SageMaker.CreateModelBiasJobDefinition"
}
export declare class CreateModelBiasJobDefinitionRequest extends SpeakeasyBase {
    createModelBiasJobDefinitionRequest: shared.CreateModelBiasJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelBiasJobDefinitionXAmzTargetEnum;
}
export declare class CreateModelBiasJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createModelBiasJobDefinitionResponse?: shared.CreateModelBiasJobDefinitionResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
