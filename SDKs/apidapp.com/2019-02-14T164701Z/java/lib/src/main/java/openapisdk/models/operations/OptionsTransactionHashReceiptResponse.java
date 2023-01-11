package openapisdk.models.operations;



public class OptionsTransactionHashReceiptResponse {
    public String contentType;
    public OptionsTransactionHashReceiptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsTransactionHashReceiptResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsTransactionHashReceiptResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsTransactionHashReceiptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}