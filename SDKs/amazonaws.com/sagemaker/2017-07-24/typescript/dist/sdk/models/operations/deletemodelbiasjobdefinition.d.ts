import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelBiasJobDefinitionXAmzTargetEnum {
    SageMakerDeleteModelBiasJobDefinition = "SageMaker.DeleteModelBiasJobDefinition"
}
export declare class DeleteModelBiasJobDefinitionRequest extends SpeakeasyBase {
    deleteModelBiasJobDefinitionRequest: shared.DeleteModelBiasJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelBiasJobDefinitionXAmzTargetEnum;
}
export declare class DeleteModelBiasJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
