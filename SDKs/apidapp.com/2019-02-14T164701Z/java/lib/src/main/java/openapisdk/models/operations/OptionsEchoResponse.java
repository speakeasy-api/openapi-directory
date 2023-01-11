package openapisdk.models.operations;



public class OptionsEchoResponse {
    public String contentType;
    public OptionsEchoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsEchoResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsEchoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsEchoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}