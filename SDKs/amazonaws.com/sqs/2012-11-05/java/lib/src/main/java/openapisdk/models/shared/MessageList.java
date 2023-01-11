package openapisdk.models.shared;



/**
 * MessageList
 * An Amazon SQS message.
**/
public class MessageList {
    public java.util.Map<String, String> attributes;
    public MessageList withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    public String body;
    public MessageList withBody(String body) {
        this.body = body;
        return this;
    }
    public String md5OfBody;
    public MessageList withMd5OfBody(String md5OfBody) {
        this.md5OfBody = md5OfBody;
        return this;
    }
    public String md5OfMessageAttributes;
    public MessageList withMd5OfMessageAttributes(String md5OfMessageAttributes) {
        this.md5OfMessageAttributes = md5OfMessageAttributes;
        return this;
    }
    public java.util.Map<String, MessageAttributeValue> messageAttributes;
    public MessageList withMessageAttributes(java.util.Map<String, MessageAttributeValue> messageAttributes) {
        this.messageAttributes = messageAttributes;
        return this;
    }
    public String messageId;
    public MessageList withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    public String receiptHandle;
    public MessageList withReceiptHandle(String receiptHandle) {
        this.receiptHandle = receiptHandle;
        return this;
    }
}