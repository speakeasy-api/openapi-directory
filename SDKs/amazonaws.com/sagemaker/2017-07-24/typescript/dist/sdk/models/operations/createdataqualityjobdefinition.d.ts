import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataQualityJobDefinitionXAmzTargetEnum {
    SageMakerCreateDataQualityJobDefinition = "SageMaker.CreateDataQualityJobDefinition"
}
export declare class CreateDataQualityJobDefinitionRequest extends SpeakeasyBase {
    createDataQualityJobDefinitionRequest: shared.CreateDataQualityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataQualityJobDefinitionXAmzTargetEnum;
}
export declare class CreateDataQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDataQualityJobDefinitionResponse?: shared.CreateDataQualityJobDefinitionResponse;
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
