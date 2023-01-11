package openapisdk.models.operations;



public class OptionsResponse {
    public String contentType;
    public OptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}