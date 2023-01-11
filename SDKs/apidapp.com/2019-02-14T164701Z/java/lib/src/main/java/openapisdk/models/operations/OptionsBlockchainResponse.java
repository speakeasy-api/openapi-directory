package openapisdk.models.operations;



public class OptionsBlockchainResponse {
    public String contentType;
    public OptionsBlockchainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsBlockchainResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsBlockchainResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsBlockchainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}