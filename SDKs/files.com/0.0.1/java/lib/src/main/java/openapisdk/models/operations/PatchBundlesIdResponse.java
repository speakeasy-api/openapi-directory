package openapisdk.models.operations;



public class PatchBundlesIdResponse {
    public openapisdk.models.shared.BundleEntity bundleEntity;
    public PatchBundlesIdResponse withBundleEntity(openapisdk.models.shared.BundleEntity bundleEntity) {
        this.bundleEntity = bundleEntity;
        return this;
    }
    public String contentType;
    public PatchBundlesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchBundlesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}