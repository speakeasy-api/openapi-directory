package openapisdk.models.operations;



public class GetBundleRecipientsResponse {
    public openapisdk.models.shared.BundleRecipientEntity[] bundleRecipientEntities;
    public GetBundleRecipientsResponse withBundleRecipientEntities(openapisdk.models.shared.BundleRecipientEntity[] bundleRecipientEntities) {
        this.bundleRecipientEntities = bundleRecipientEntities;
        return this;
    }
    public String contentType;
    public GetBundleRecipientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBundleRecipientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}