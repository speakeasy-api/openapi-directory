import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePipelineXAmzTargetEnum {
    CodePipeline20150709CreatePipeline = "CodePipeline_20150709.CreatePipeline"
}
export declare class CreatePipelineRequest extends SpeakeasyBase {
    createPipelineInput: shared.CreatePipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePipelineXAmzTargetEnum;
}
export declare class CreatePipelineResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createPipelineOutput?: shared.CreatePipelineOutput;
    /**
     * InvalidActionDeclarationException
     */
    invalidActionDeclarationException?: any;
    /**
     * InvalidBlockerDeclarationException
     */
    invalidBlockerDeclarationException?: any;
    /**
     * InvalidStageDeclarationException
     */
    invalidStageDeclarationException?: any;
    /**
     * InvalidStructureException
     */
    invalidStructureException?: any;
    /**
     * InvalidTagsException
     */
    invalidTagsException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * PipelineNameInUseException
     */
    pipelineNameInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
