import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWebhookXAmzTargetEnum {
    CodeBuild20161006CreateWebhook = "CodeBuild_20161006.CreateWebhook"
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    createWebhookInput: shared.CreateWebhookInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWebhookXAmzTargetEnum;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWebhookOutput?: shared.CreateWebhookOutput;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
