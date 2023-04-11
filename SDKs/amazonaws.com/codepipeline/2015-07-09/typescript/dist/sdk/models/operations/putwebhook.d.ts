import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutWebhookXAmzTargetEnum {
    CodePipeline20150709PutWebhook = "CodePipeline_20150709.PutWebhook"
}
export declare class PutWebhookRequest extends SpeakeasyBase {
    putWebhookInput: shared.PutWebhookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutWebhookXAmzTargetEnum;
}
export declare class PutWebhookResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidTagsException
     */
    invalidTagsException?: any;
    /**
     * InvalidWebhookAuthenticationParametersException
     */
    invalidWebhookAuthenticationParametersException?: any;
    /**
     * InvalidWebhookFilterPatternException
     */
    invalidWebhookFilterPatternException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    /**
     * Success
     */
    putWebhookOutput?: shared.PutWebhookOutput;
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
