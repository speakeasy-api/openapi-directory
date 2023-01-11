package openapisdk.models.operations;



public class GetBundlesResponse {
    public openapisdk.models.shared.BundleEntity[] bundleEntities;
    public GetBundlesResponse withBundleEntities(openapisdk.models.shared.BundleEntity[] bundleEntities) {
        this.bundleEntities = bundleEntities;
        return this;
    }
    public String contentType;
    public GetBundlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBundlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}