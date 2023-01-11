package openapisdk.models.operations;



public class OptionsTransactionHashResponse {
    public String contentType;
    public OptionsTransactionHashResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsTransactionHashResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsTransactionHashResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsTransactionHashResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}