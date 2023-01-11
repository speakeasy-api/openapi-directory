package openapisdk.models.operations;



public class ReposDownloadZipballArchiveResponse {
    public String contentType;
    public ReposDownloadZipballArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposDownloadZipballArchiveResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposDownloadZipballArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}