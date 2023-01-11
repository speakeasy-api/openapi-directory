package openapisdk.models.operations;



public class ResendInvitationsForShareResponse {
    public String contentType;
    public ResendInvitationsForShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShareRecipientsResponse shareRecipientsResponse;
    public ResendInvitationsForShareResponse withShareRecipientsResponse(openapisdk.models.shared.ShareRecipientsResponse shareRecipientsResponse) {
        this.shareRecipientsResponse = shareRecipientsResponse;
        return this;
    }
    public Long statusCode;
    public ResendInvitationsForShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}