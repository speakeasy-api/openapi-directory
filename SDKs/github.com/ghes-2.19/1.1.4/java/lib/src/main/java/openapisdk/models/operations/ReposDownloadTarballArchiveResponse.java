package openapisdk.models.operations;



public class ReposDownloadTarballArchiveResponse {
    public String contentType;
    public ReposDownloadTarballArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposDownloadTarballArchiveResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposDownloadTarballArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}