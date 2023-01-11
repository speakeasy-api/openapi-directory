package openapisdk.models.operations;



public class StorageUpdateFileResponse {
    public String contentType;
    public StorageUpdateFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageUpdateFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.File file;
    public StorageUpdateFileResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
}