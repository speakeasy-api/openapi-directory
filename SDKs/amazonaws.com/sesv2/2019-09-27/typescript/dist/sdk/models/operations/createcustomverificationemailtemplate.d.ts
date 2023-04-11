import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateCustomVerificationEmailTemplateRequestBody extends SpeakeasyBase {
    /**
     * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
     */
    failureRedirectionURL: string;
    /**
     * The email address that the custom verification email is sent from.
     */
    fromEmailAddress: string;
    /**
     * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
     */
    successRedirectionURL: string;
    /**
     * The content of the custom verification email template.
     */
    templateContent: string;
    /**
     * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
     */
    templateName: string;
    /**
     * The subject line of the email.
     */
    templateSubject: string;
}
export declare class CreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    requestBody: CreateCustomVerificationEmailTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
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
    createCustomVerificationEmailTemplateResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
}
