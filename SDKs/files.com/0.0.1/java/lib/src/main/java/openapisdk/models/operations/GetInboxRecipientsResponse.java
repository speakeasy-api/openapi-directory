package openapisdk.models.operations;



public class GetInboxRecipientsResponse {
    public String contentType;
    public GetInboxRecipientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InboxRecipientEntity[] inboxRecipientEntities;
    public GetInboxRecipientsResponse withInboxRecipientEntities(openapisdk.models.shared.InboxRecipientEntity[] inboxRecipientEntities) {
        this.inboxRecipientEntities = inboxRecipientEntities;
        return this;
    }
    public Long statusCode;
    public GetInboxRecipientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}