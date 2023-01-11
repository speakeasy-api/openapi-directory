package openapisdk.models.operations;



public class GetInboxUploadsResponse {
    public String contentType;
    public GetInboxUploadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InboxUploadEntity[] inboxUploadEntities;
    public GetInboxUploadsResponse withInboxUploadEntities(openapisdk.models.shared.InboxUploadEntity[] inboxUploadEntities) {
        this.inboxUploadEntities = inboxUploadEntities;
        return this;
    }
    public Long statusCode;
    public GetInboxUploadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}