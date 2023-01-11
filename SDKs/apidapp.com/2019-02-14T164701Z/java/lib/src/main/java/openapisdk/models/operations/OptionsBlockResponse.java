package openapisdk.models.operations;



public class OptionsBlockResponse {
    public String contentType;
    public OptionsBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsBlockResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsBlockResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}