package openapisdk.models.operations;



public class StorageGetFilePreviewResponse {
    public String contentType;
    public StorageGetFilePreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageGetFilePreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}