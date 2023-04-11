import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterWebhookWithThirdPartyXAmzTargetEnum {
    CodePipeline20150709DeregisterWebhookWithThirdParty = "CodePipeline_20150709.DeregisterWebhookWithThirdParty"
}
export declare class DeregisterWebhookWithThirdPartyRequest extends SpeakeasyBase {
    deregisterWebhookWithThirdPartyInput: shared.DeregisterWebhookWithThirdPartyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterWebhookWithThirdPartyXAmzTargetEnum;
}
export declare class DeregisterWebhookWithThirdPartyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterWebhookWithThirdPartyOutput?: Record<string, any>;
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
