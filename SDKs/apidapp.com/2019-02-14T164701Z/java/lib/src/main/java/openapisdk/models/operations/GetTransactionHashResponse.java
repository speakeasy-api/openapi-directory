package openapisdk.models.operations;



public class GetTransactionHashResponse {
    public String contentType;
    public GetTransactionHashResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetTransactionHashResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTransactionHashResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTransactionHashResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}