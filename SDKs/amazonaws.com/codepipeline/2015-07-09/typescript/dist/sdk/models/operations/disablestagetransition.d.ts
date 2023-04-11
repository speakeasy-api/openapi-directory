import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableStageTransitionXAmzTargetEnum {
    CodePipeline20150709DisableStageTransition = "CodePipeline_20150709.DisableStageTransition"
}
export declare class DisableStageTransitionRequest extends SpeakeasyBase {
    disableStageTransitionInput: shared.DisableStageTransitionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableStageTransitionXAmzTargetEnum;
}
export declare class DisableStageTransitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * StageNotFoundException
     */
    stageNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
