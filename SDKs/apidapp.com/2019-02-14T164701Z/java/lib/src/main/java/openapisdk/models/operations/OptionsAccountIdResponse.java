package openapisdk.models.operations;



public class OptionsAccountIdResponse {
    public String contentType;
    public OptionsAccountIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsAccountIdResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsAccountIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsAccountIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}