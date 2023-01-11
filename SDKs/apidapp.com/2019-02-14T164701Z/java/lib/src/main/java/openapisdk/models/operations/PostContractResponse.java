package openapisdk.models.operations;



public class PostContractResponse {
    public String contentType;
    public PostContractResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public PostContractResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public Long statusCode;
    public PostContractResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}