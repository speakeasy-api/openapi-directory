package openapisdk.models.operations;



public class FetchFieldByIdResponse {
    public String contentType;
    public FetchFieldByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FetchFieldByIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Object field;
    public FetchFieldByIdResponse withField(Object field) {
        this.field = field;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FetchFieldByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FetchFieldByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}