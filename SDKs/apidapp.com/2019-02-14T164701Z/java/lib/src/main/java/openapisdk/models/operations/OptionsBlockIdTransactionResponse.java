package openapisdk.models.operations;



public class OptionsBlockIdTransactionResponse {
    public String contentType;
    public OptionsBlockIdTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsBlockIdTransactionResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsBlockIdTransactionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsBlockIdTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}