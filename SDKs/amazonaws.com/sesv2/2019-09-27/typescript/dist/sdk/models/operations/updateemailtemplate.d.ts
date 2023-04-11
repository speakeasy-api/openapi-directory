import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
 */
export declare class UpdateEmailTemplateRequestBodyTemplateContent extends SpeakeasyBase {
    html?: string;
    subject?: string;
    text?: string;
}
export declare class UpdateEmailTemplateRequestBody extends SpeakeasyBase {
    /**
     * The content of the email, composed of a subject line, an HTML part, and a text-only part.
     */
    templateContent: UpdateEmailTemplateRequestBodyTemplateContent;
}
export declare class UpdateEmailTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateEmailTemplateRequestBody;
    /**
     * The name of the template.
     */
    templateName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEmailTemplateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateEmailTemplateResponse?: Record<string, any>;
}
