import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePipelineXAmzTargetEnum {
    CodePipeline20150709DeletePipeline = "CodePipeline_20150709.DeletePipeline"
}
export declare class DeletePipelineRequest extends SpeakeasyBase {
    deletePipelineInput: shared.DeletePipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePipelineXAmzTargetEnum;
}
export declare class DeletePipelineResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
