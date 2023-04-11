import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
 */
export declare class SendEmailRequestBodyContent extends SpeakeasyBase {
    raw?: shared.RawMessage;
    simple?: shared.Message;
    template?: shared.Template;
}
/**
 * An object that describes the recipients for an email.
 */
export declare class SendEmailRequestBodyDestination extends SpeakeasyBase {
    bccAddresses?: string[];
    ccAddresses?: string[];
    toAddresses?: string[];
}
export declare class SendEmailRequestBody extends SpeakeasyBase {
    /**
     * <p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    configurationSetName?: string;
    /**
     * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
     */
    content: SendEmailRequestBodyContent;
    /**
     * An object that describes the recipients for an email.
     */
    destination: SendEmailRequestBodyDestination;
    /**
     * A list of message tags.
     */
    emailTags?: shared.MessageTag[];
    /**
     * The address that Amazon Pinpoint should send bounce and complaint notifications to.
     */
    feedbackForwardingEmailAddress?: string;
    /**
     * The email address that you want to use as the "From" address for the email. The address that you specify has to be verified.
     */
    fromEmailAddress?: string;
    /**
     * The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
     */
    replyToAddresses?: string[];
}
export declare class SendEmailRequest extends SpeakeasyBase {
    requestBody: SendEmailRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendEmailResponse extends SpeakeasyBase {
    /**
     * AccountSuspendedException
     */
    accountSuspendedException?: any;
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
    sendEmailResponse?: shared.SendEmailResponse;
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
