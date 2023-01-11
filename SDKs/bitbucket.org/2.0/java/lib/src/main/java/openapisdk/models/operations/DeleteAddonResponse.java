package openapisdk.models.operations;



public class DeleteAddonResponse {
    public String contentType;
    public DeleteAddonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAddonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteAddonResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}