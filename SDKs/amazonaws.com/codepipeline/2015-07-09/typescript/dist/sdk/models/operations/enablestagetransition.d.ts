import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableStageTransitionXAmzTargetEnum {
    CodePipeline20150709EnableStageTransition = "CodePipeline_20150709.EnableStageTransition"
}
export declare class EnableStageTransitionRequest extends SpeakeasyBase {
    enableStageTransitionInput: shared.EnableStageTransitionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableStageTransitionXAmzTargetEnum;
}
export declare class EnableStageTransitionResponse extends SpeakeasyBase {
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
