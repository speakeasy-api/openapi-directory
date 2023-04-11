import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutApprovalResultXAmzTargetEnum {
    CodePipeline20150709PutApprovalResult = "CodePipeline_20150709.PutApprovalResult"
}
export declare class PutApprovalResultRequest extends SpeakeasyBase {
    putApprovalResultInput: shared.PutApprovalResultInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutApprovalResultXAmzTargetEnum;
}
export declare class PutApprovalResultResponse extends SpeakeasyBase {
    /**
     * ActionNotFoundException
     */
    actionNotFoundException?: any;
    /**
     * ApprovalAlreadyCompletedException
     */
    approvalAlreadyCompletedException?: any;
    contentType: string;
    /**
     * InvalidApprovalTokenException
     */
    invalidApprovalTokenException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * Success
     */
    putApprovalResultOutput?: shared.PutApprovalResultOutput;
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
