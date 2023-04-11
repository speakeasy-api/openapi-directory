import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePipelineDefinitionForExecutionXAmzTargetEnum {
    SageMakerDescribePipelineDefinitionForExecution = "SageMaker.DescribePipelineDefinitionForExecution"
}
export declare class DescribePipelineDefinitionForExecutionRequest extends SpeakeasyBase {
    describePipelineDefinitionForExecutionRequest: shared.DescribePipelineDefinitionForExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelineDefinitionForExecutionXAmzTargetEnum;
}
export declare class DescribePipelineDefinitionForExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePipelineDefinitionForExecutionResponse?: shared.DescribePipelineDefinitionForExecutionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
