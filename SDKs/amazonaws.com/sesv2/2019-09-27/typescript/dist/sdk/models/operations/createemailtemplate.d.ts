import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
 */
export declare class CreateEmailTemplateRequestBodyTemplateContent extends SpeakeasyBase {
    html?: string;
    subject?: string;
    text?: string;
}
export declare class CreateEmailTemplateRequestBody extends SpeakeasyBase {
    /**
     * The content of the email, composed of a subject line, an HTML part, and a text-only part.
     */
    templateContent: CreateEmailTemplateRequestBodyTemplateContent;
    /**
     * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
     */
    templateName: string;
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
}
export declare class CreateEmailTemplateResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createEmailTemplateResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
