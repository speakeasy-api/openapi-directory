package openapisdk.models.operations;



public class OptionsBlockIdResponse {
    public String contentType;
    public OptionsBlockIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public OptionsBlockIdResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OptionsBlockIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OptionsBlockIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}