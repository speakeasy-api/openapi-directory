import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWebhookXAmzTargetEnum {
    CodeBuild20161006UpdateWebhook = "CodeBuild_20161006.UpdateWebhook"
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    updateWebhookInput: shared.UpdateWebhookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWebhookXAmzTargetEnum;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OAuthProviderException
     */
    oAuthProviderException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateWebhookOutput?: shared.UpdateWebhookOutput;
}
