package openapisdk.models.operations;



public class OptionsContractIdResponse {
    public String contentType;
    public OptionsContractIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsContractIdResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsContractIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsContractIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}