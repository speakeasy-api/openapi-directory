import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
 */
export declare class CreatePushTemplateRequestBodyPushNotificationTemplateRequest extends SpeakeasyBase {
    adm?: shared.AndroidPushNotificationTemplate;
    apns?: shared.APNSPushNotificationTemplate;
    baidu?: shared.AndroidPushNotificationTemplate;
    default?: shared.DefaultPushNotificationTemplate;
    defaultSubstitutions?: string;
    gcm?: shared.AndroidPushNotificationTemplate;
    recommenderId?: string;
    templateDescription?: string;
    tags?: Record<string, string>;
}
export declare class CreatePushTemplateRequestBody extends SpeakeasyBase {
    /**
     * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
     */
    pushNotificationTemplateRequest: CreatePushTemplateRequestBodyPushNotificationTemplateRequest;
}
export declare class CreatePushTemplateRequest extends SpeakeasyBase {
    requestBody: CreatePushTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
     */
    templateName: string;
}
export declare class CreatePushTemplateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createPushTemplateResponse?: shared.CreatePushTemplateResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
