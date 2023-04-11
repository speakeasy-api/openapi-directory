import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
 */
export declare class CreateEmailTemplateRequestBodyEmailTemplateRequest extends SpeakeasyBase {
    defaultSubstitutions?: string;
    htmlPart?: string;
    recommenderId?: string;
    subject?: string;
    templateDescription?: string;
    textPart?: string;
    tags?: Record<string, string>;
}
export declare class CreateEmailTemplateRequestBody extends SpeakeasyBase {
    /**
     * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
     */
    emailTemplateRequest: CreateEmailTemplateRequestBodyEmailTemplateRequest;
}
export declare class CreateEmailTemplateRequest extends SpeakeasyBase {
    requestBody: CreateEmailTemplateRequestBody;
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
export declare class CreateEmailTemplateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createEmailTemplateResponse?: shared.CreateEmailTemplateResponse;
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
