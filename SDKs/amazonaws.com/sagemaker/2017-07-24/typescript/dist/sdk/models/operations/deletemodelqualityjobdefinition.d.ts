import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelQualityJobDefinitionXAmzTargetEnum {
    SageMakerDeleteModelQualityJobDefinition = "SageMaker.DeleteModelQualityJobDefinition"
}
export declare class DeleteModelQualityJobDefinitionRequest extends SpeakeasyBase {
    deleteModelQualityJobDefinitionRequest: shared.DeleteModelQualityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelQualityJobDefinitionXAmzTargetEnum;
}
export declare class DeleteModelQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
