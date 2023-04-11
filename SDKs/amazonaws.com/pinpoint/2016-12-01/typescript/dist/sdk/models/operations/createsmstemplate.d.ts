import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
 */
export declare class CreateSMSTemplateRequestBodySMSTemplateRequest extends SpeakeasyBase {
    body?: string;
    defaultSubstitutions?: string;
    recommenderId?: string;
    templateDescription?: string;
    tags?: Record<string, string>;
}
export declare class CreateSmsTemplateRequestBody extends SpeakeasyBase {
    /**
     * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
     */
    smsTemplateRequest: CreateSMSTemplateRequestBodySMSTemplateRequest;
}
export declare class CreateSmsTemplateRequest extends SpeakeasyBase {
    requestBody: CreateSmsTemplateRequestBody;
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
export declare class CreateSmsTemplateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createSmsTemplateResponse?: shared.CreateSmsTemplateResponse;
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
