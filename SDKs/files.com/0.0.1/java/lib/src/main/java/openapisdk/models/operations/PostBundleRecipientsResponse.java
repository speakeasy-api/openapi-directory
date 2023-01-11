package openapisdk.models.operations;



public class PostBundleRecipientsResponse {
    public openapisdk.models.shared.BundleRecipientEntity bundleRecipientEntity;
    public PostBundleRecipientsResponse withBundleRecipientEntity(openapisdk.models.shared.BundleRecipientEntity bundleRecipientEntity) {
        this.bundleRecipientEntity = bundleRecipientEntity;
        return this;
    }
    public String contentType;
    public PostBundleRecipientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBundleRecipientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}