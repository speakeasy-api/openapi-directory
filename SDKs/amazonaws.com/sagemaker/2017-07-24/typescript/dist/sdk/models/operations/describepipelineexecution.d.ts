import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePipelineExecutionXAmzTargetEnum {
    SageMakerDescribePipelineExecution = "SageMaker.DescribePipelineExecution"
}
export declare class DescribePipelineExecutionRequest extends SpeakeasyBase {
    describePipelineExecutionRequest: shared.DescribePipelineExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelineExecutionXAmzTargetEnum;
}
export declare class DescribePipelineExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePipelineExecutionResponse?: shared.DescribePipelineExecutionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
