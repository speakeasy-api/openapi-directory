package openapisdk.models.operations;



public class GetInboxRegistrationsResponse {
    public String contentType;
    public GetInboxRegistrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InboxRegistrationEntity[] inboxRegistrationEntities;
    public GetInboxRegistrationsResponse withInboxRegistrationEntities(openapisdk.models.shared.InboxRegistrationEntity[] inboxRegistrationEntities) {
        this.inboxRegistrationEntities = inboxRegistrationEntities;
        return this;
    }
    public Long statusCode;
    public GetInboxRegistrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}