import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies which version of a message template to use as the active version of the template.
 */
export declare class UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest extends SpeakeasyBase {
    version?: string;
}
export declare class UpdateTemplateActiveVersionRequestBody extends SpeakeasyBase {
    /**
     * Specifies which version of a message template to use as the active version of the template.
     */
    templateActiveVersionRequest: UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest;
}
export declare class UpdateTemplateActiveVersionRequest extends SpeakeasyBase {
    requestBody: UpdateTemplateActiveVersionRequestBody;
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
    /**
     * The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.
     */
    templateType: string;
}
export declare class UpdateTemplateActiveVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
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
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * PayloadTooLargeException
     */
    payloadTooLargeException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateTemplateActiveVersionResponse?: shared.UpdateTemplateActiveVersionResponse;
}
