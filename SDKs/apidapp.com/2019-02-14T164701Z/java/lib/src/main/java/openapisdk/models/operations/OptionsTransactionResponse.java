package openapisdk.models.operations;



public class OptionsTransactionResponse {
    public String contentType;
    public OptionsTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsTransactionResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsTransactionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}