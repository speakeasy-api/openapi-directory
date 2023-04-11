import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePipelineXAmzTargetEnum {
    SageMakerDescribePipeline = "SageMaker.DescribePipeline"
}
export declare class DescribePipelineRequest extends SpeakeasyBase {
    describePipelineRequest: shared.DescribePipelineRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePipelineXAmzTargetEnum;
}
export declare class DescribePipelineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePipelineResponse?: shared.DescribePipelineResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
