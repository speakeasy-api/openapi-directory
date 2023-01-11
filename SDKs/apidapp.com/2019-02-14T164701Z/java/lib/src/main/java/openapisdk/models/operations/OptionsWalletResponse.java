package openapisdk.models.operations;



public class OptionsWalletResponse {
    public String contentType;
    public OptionsWalletResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsWalletResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsWalletResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsWalletResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}