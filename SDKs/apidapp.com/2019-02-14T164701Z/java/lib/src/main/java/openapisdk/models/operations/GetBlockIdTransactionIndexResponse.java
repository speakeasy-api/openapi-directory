package openapisdk.models.operations;



public class GetBlockIdTransactionIndexResponse {
    public String contentType;
    public GetBlockIdTransactionIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetBlockIdTransactionIndexResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBlockIdTransactionIndexResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBlockIdTransactionIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}