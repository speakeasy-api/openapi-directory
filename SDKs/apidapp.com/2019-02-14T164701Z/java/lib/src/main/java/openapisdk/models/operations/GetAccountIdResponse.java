package openapisdk.models.operations;



public class GetAccountIdResponse {
    public String contentType;
    public GetAccountIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetAccountIdResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAccountIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAccountIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}