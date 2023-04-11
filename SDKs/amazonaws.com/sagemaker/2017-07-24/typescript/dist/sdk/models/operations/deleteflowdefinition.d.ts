import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFlowDefinitionXAmzTargetEnum {
    SageMakerDeleteFlowDefinition = "SageMaker.DeleteFlowDefinition"
}
export declare class DeleteFlowDefinitionRequest extends SpeakeasyBase {
    deleteFlowDefinitionRequest: shared.DeleteFlowDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFlowDefinitionXAmzTargetEnum;
}
export declare class DeleteFlowDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFlowDefinitionResponse?: Record<string, any>;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
}
