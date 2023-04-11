import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePipelinesXAmzTargetEnum {
    DataPipelineDescribePipelines = "DataPipeline.DescribePipelines"
}
export declare class DescribePipelinesRequest extends SpeakeasyBase {
    describePipelinesInput: shared.DescribePipelinesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelinesXAmzTargetEnum;
}
export declare class DescribePipelinesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePipelinesOutput?: shared.DescribePipelinesOutput;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * PipelineDeletedException
     */
    pipelineDeletedException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
