import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
 */
export declare class CreateVoiceTemplateRequestBodyVoiceTemplateRequest extends SpeakeasyBase {
    body?: string;
    defaultSubstitutions?: string;
    languageCode?: string;
    templateDescription?: string;
    voiceId?: string;
    tags?: Record<string, string>;
}
export declare class CreateVoiceTemplateRequestBody extends SpeakeasyBase {
    /**
     * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
     */
    voiceTemplateRequest: CreateVoiceTemplateRequestBodyVoiceTemplateRequest;
}
export declare class CreateVoiceTemplateRequest extends SpeakeasyBase {
    requestBody: CreateVoiceTemplateRequestBody;
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
export declare class CreateVoiceTemplateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createVoiceTemplateResponse?: shared.CreateVoiceTemplateResponse;
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
