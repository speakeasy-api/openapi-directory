package openapisdk.models.operations;



public class StorageGetFileDownloadResponse {
    public String contentType;
    public StorageGetFileDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageGetFileDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}