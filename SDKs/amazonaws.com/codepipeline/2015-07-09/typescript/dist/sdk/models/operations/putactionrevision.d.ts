import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutActionRevisionXAmzTargetEnum {
    CodePipeline20150709PutActionRevision = "CodePipeline_20150709.PutActionRevision"
}
export declare class PutActionRevisionRequest extends SpeakeasyBase {
    putActionRevisionInput: shared.PutActionRevisionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutActionRevisionXAmzTargetEnum;
}
export declare class PutActionRevisionResponse extends SpeakeasyBase {
    /**
     * ActionNotFoundException
     */
    actionNotFoundException?: any;
    contentType: string;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * Success
     */
    putActionRevisionOutput?: shared.PutActionRevisionOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StageNotFoundException
     */
    stageNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
