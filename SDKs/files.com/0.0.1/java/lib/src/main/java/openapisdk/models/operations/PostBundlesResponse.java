package openapisdk.models.operations;



public class PostBundlesResponse {
    public openapisdk.models.shared.BundleEntity bundleEntity;
    public PostBundlesResponse withBundleEntity(openapisdk.models.shared.BundleEntity bundleEntity) {
        this.bundleEntity = bundleEntity;
        return this;
    }
    public String contentType;
    public PostBundlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBundlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}