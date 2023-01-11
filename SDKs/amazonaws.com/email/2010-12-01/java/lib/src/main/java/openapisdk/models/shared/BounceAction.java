package openapisdk.models.shared;



/**
 * BounceAction
 * <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>
**/
public class BounceAction {
    public String message;
    public BounceAction withMessage(String message) {
        this.message = message;
        return this;
    }
    public String sender;
    public BounceAction withSender(String sender) {
        this.sender = sender;
        return this;
    }
    public String smtpReplyCode;
    public BounceAction withSmtpReplyCode(String smtpReplyCode) {
        this.smtpReplyCode = smtpReplyCode;
        return this;
    }
    public String statusCode;
    public BounceAction withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String topicArn;
    public BounceAction withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
}