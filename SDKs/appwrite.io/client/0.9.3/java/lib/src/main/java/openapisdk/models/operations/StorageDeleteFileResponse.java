package openapisdk.models.operations;



public class StorageDeleteFileResponse {
    public String contentType;
    public StorageDeleteFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageDeleteFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}