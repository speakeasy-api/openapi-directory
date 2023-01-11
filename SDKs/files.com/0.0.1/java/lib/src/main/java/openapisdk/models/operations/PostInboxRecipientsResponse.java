package openapisdk.models.operations;



public class PostInboxRecipientsResponse {
    public String contentType;
    public PostInboxRecipientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InboxRecipientEntity inboxRecipientEntity;
    public PostInboxRecipientsResponse withInboxRecipientEntity(openapisdk.models.shared.InboxRecipientEntity inboxRecipientEntity) {
        this.inboxRecipientEntity = inboxRecipientEntity;
        return this;
    }
    public Long statusCode;
    public PostInboxRecipientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}