package openapisdk.models.operations;



public class GetBlockchainResponse {
    public String contentType;
    public GetBlockchainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetBlockchainResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBlockchainResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBlockchainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}