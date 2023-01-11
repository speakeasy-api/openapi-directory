package openapisdk.models.operations;



public class PutAddonResponse {
    public String contentType;
    public PutAddonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutAddonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutAddonResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}