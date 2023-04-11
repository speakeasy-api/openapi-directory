import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that contains the body of the message. You can specify a template message.
 */
export declare class SendBulkEmailRequestBodyDefaultContent extends SpeakeasyBase {
    template?: shared.Template;
}
export declare class SendBulkEmailRequestBody extends SpeakeasyBase {
    /**
     * A list of <code>BulkEmailEntry</code> objects.
     */
    bulkEmailEntries: shared.BulkEmailEntry[];
    /**
     * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    configurationSetName?: string;
    /**
     * An object that contains the body of the message. You can specify a template message.
     */
    defaultContent: SendBulkEmailRequestBodyDefaultContent;
    /**
     * A list of message tags.
     */
    defaultEmailTags?: shared.MessageTag[];
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
     * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
     */
    fromEmailAddressIdentityArn?: string;
    /**
     * The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
     */
    replyToAddresses?: string[];
}
export declare class SendBulkEmailRequest extends SpeakeasyBase {
    requestBody: SendBulkEmailRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SendBulkEmailResponse extends SpeakeasyBase {
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
    sendBulkEmailResponse?: shared.SendBulkEmailResponse;
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
