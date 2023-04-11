import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsXAmzTargetEnum {
    DataPipelineAddTags = "DataPipeline.AddTags"
}
export declare class AddTagsRequest extends SpeakeasyBase {
    addTagsInput: shared.AddTagsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsXAmzTargetEnum;
}
export declare class AddTagsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addTagsOutput?: Record<string, any>;
    contentType: string;
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
