package openapisdk.models.operations;



public class PostContractIdResponse {
    public String contentType;
    public PostContractIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public PostContractIdResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostContractIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostContractIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}