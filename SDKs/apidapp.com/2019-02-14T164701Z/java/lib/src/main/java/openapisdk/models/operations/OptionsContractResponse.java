package openapisdk.models.operations;



public class OptionsContractResponse {
    public String contentType;
    public OptionsContractResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsContractResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsContractResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsContractResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}