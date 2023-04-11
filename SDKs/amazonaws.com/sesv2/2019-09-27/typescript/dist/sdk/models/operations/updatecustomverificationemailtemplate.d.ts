import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCustomVerificationEmailTemplateRequestBody extends SpeakeasyBase {
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
     * The subject line of the email.
     */
    templateSubject: string;
}
export declare class UpdateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateCustomVerificationEmailTemplateRequestBody;
    /**
     * The name of the custom verification email template that you want to update.
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
export declare class UpdateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
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
    updateCustomVerificationEmailTemplateResponse?: Record<string, any>;
}
