package openapisdk.models.operations;



public class StorageCreateFileResponse {
    public String contentType;
    public StorageCreateFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageCreateFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.File file;
    public StorageCreateFileResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
}