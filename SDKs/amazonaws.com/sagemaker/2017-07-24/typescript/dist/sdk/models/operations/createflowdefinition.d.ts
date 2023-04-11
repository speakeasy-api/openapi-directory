import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFlowDefinitionXAmzTargetEnum {
    SageMakerCreateFlowDefinition = "SageMaker.CreateFlowDefinition"
}
export declare class CreateFlowDefinitionRequest extends SpeakeasyBase {
    createFlowDefinitionRequest: shared.CreateFlowDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFlowDefinitionXAmzTargetEnum;
}
export declare class CreateFlowDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFlowDefinitionResponse?: shared.CreateFlowDefinitionResponse;
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
