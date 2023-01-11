package openapisdk.models.operations;



public class StorageGetFileResponse {
    public String contentType;
    public StorageGetFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageGetFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.File file;
    public StorageGetFileResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
}