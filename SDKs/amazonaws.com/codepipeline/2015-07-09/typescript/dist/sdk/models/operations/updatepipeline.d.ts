import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePipelineXAmzTargetEnum {
    CodePipeline20150709UpdatePipeline = "CodePipeline_20150709.UpdatePipeline"
}
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    updatePipelineInput: shared.UpdatePipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePipelineXAmzTargetEnum;
}
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    contentType: string;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePipelineOutput?: shared.UpdatePipelineOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
