import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterWebhookWithThirdPartyXAmzTargetEnum {
    CodePipeline20150709RegisterWebhookWithThirdParty = "CodePipeline_20150709.RegisterWebhookWithThirdParty"
}
export declare class RegisterWebhookWithThirdPartyRequest extends SpeakeasyBase {
    registerWebhookWithThirdPartyInput: shared.RegisterWebhookWithThirdPartyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterWebhookWithThirdPartyXAmzTargetEnum;
}
export declare class RegisterWebhookWithThirdPartyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    registerWebhookWithThirdPartyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
    /**
     * WebhookNotFoundException
     */
    webhookNotFoundException?: any;
}
