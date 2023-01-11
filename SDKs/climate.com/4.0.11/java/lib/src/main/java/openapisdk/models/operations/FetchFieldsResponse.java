package openapisdk.models.operations;



public class FetchFieldsResponse {
    public String contentType;
    public FetchFieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public FetchFieldsResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FetchFieldsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Object fields;
    public FetchFieldsResponse withFields(Object fields) {
        this.fields = fields;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FetchFieldsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FetchFieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}