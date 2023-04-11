import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelExplainabilityJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelExplainabilityJobDefinition = "SageMaker.CreateModelExplainabilityJobDefinition"
}
export declare class CreateModelExplainabilityJobDefinitionRequest extends SpeakeasyBase {
    createModelExplainabilityJobDefinitionRequest: shared.CreateModelExplainabilityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelExplainabilityJobDefinitionXAmzTargetEnum;
}
export declare class CreateModelExplainabilityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createModelExplainabilityJobDefinitionResponse?: shared.CreateModelExplainabilityJobDefinitionResponse;
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
