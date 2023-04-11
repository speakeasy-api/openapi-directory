import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerDeleteModelExplainabilityJobDefinition = "SageMaker.DeleteModelExplainabilityJobDefinition"
}
export declare class DeleteModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
    deleteModelExplainabilityJobDefinitionRequest: shared.DeleteModelExplainabilityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelExplainabilityJobDefinitionXAmzTargetEnum;
}
export declare class DeleteModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
