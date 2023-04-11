import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWebhookXAmzTargetEnum {
    CodeBuild20161006DeleteWebhook = "CodeBuild_20161006.DeleteWebhook"
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    deleteWebhookInput: shared.DeleteWebhookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWebhookXAmzTargetEnum;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteWebhookOutput?: Record<string, any>;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OAuthProviderException
     */
    oAuthProviderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
