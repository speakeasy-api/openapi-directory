import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelQualityJobDefinitionXAmzTargetEnum {
    SageMakerCreateModelQualityJobDefinition = "SageMaker.CreateModelQualityJobDefinition"
}
export declare class CreateModelQualityJobDefinitionRequest extends SpeakeasyBase {
    createModelQualityJobDefinitionRequest: shared.CreateModelQualityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelQualityJobDefinitionXAmzTargetEnum;
}
export declare class CreateModelQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createModelQualityJobDefinitionResponse?: shared.CreateModelQualityJobDefinitionResponse;
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
