package openapisdk.models.operations;



public class GetBundlesIdResponse {
    public openapisdk.models.shared.BundleEntity bundleEntity;
    public GetBundlesIdResponse withBundleEntity(openapisdk.models.shared.BundleEntity bundleEntity) {
        this.bundleEntity = bundleEntity;
        return this;
    }
    public String contentType;
    public GetBundlesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBundlesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}