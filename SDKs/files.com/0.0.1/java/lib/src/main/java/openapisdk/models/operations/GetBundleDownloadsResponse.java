package openapisdk.models.operations;



public class GetBundleDownloadsResponse {
    public openapisdk.models.shared.BundleDownloadEntity[] bundleDownloadEntities;
    public GetBundleDownloadsResponse withBundleDownloadEntities(openapisdk.models.shared.BundleDownloadEntity[] bundleDownloadEntities) {
        this.bundleDownloadEntities = bundleDownloadEntities;
        return this;
    }
    public String contentType;
    public GetBundleDownloadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBundleDownloadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}