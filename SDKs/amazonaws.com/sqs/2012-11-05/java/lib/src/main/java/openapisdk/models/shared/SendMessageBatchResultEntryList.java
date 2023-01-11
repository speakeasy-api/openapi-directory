package openapisdk.models.shared;



/**
 * SendMessageBatchResultEntryList
 * Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code> 
**/
public class SendMessageBatchResultEntryList {
    public String id;
    public SendMessageBatchResultEntryList withId(String id) {
        this.id = id;
        return this;
    }
    public String md5OfMessageAttributes;
    public SendMessageBatchResultEntryList withMd5OfMessageAttributes(String md5OfMessageAttributes) {
        this.md5OfMessageAttributes = md5OfMessageAttributes;
        return this;
    }
    public String md5OfMessageBody;
    public SendMessageBatchResultEntryList withMd5OfMessageBody(String md5OfMessageBody) {
        this.md5OfMessageBody = md5OfMessageBody;
        return this;
    }
    public String md5OfMessageSystemAttributes;
    public SendMessageBatchResultEntryList withMd5OfMessageSystemAttributes(String md5OfMessageSystemAttributes) {
        this.md5OfMessageSystemAttributes = md5OfMessageSystemAttributes;
        return this;
    }
    public String messageId;
    public SendMessageBatchResultEntryList withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    public String sequenceNumber;
    public SendMessageBatchResultEntryList withSequenceNumber(String sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
}