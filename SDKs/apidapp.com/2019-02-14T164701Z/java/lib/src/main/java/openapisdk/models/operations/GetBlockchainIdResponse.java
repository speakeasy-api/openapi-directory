package openapisdk.models.operations;



public class GetBlockchainIdResponse {
    public String contentType;
    public GetBlockchainIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetBlockchainIdResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBlockchainIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBlockchainIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}