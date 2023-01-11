package openapisdk.models.operations;



public class FileDownloadResponse {
    public String contentType;
    public FileDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FileDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}