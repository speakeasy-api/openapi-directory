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
 * <p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
 */
export declare class SendEmailRequestBodyDestination extends SpeakeasyBase {
    bccAddresses?: string[];
    ccAddresses?: string[];
    toAddresses?: string[];
}
/**
 * An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
 */
export declare class SendEmailRequestBodyListManagementOptions extends SpeakeasyBase {
    contactListName?: string;
    topicName?: string;
}
export declare class SendEmailRequestBody extends SpeakeasyBase {
    /**
     * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    configurationSetName?: string;
    /**
     * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
     */
    content: SendEmailRequestBodyContent;
    /**
     * <p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
     */
    destination?: SendEmailRequestBodyDestination;
    /**
     * A list of message tags.
     */
    emailTags?: shared.MessageTag[];
    /**
     * The address that you want bounce and complaint notifications to be sent to.
     */
    feedbackForwardingEmailAddress?: string;
    /**
     * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
     */
    feedbackForwardingEmailAddressIdentityArn?: string;
    /**
     * The email address to use as the "From" address for the email. The address that you specify has to be verified.
     */
    fromEmailAddress?: string;
    /**
     * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.</p>
     */
    fromEmailAddressIdentityArn?: string;
    /**
     * An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
     */
    listManagementOptions?: SendEmailRequestBodyListManagementOptions;
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
