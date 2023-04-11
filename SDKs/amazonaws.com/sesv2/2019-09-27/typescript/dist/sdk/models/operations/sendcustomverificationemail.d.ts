import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendCustomVerificationEmailRequestBody extends SpeakeasyBase {
    /**
     * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    configurationSetName?: string;
    /**
     * The email address to verify.
     */
    emailAddress: string;
    /**
     * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
     */
    templateName: string;
}
export declare class SendCustomVerificationEmailRequest extends SpeakeasyBase {
    requestBody: SendCustomVerificationEmailRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendCustomVerificationEmailResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MailFromDomainNotVerifiedException
     */
    mailFromDomainNotVerifiedException?: any;
    /**
     * MessageRejected
     */
    messageRejected?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    sendCustomVerificationEmailResponse?: shared.SendCustomVerificationEmailResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SendingPausedException
     */
    sendingPausedException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
