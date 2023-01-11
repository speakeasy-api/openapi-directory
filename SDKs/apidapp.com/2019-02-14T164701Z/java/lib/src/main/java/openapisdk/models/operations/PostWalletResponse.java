package openapisdk.models.operations;



public class PostWalletResponse {
    public String contentType;
    public PostWalletResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public PostWalletResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public Long statusCode;
    public PostWalletResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}