package openapisdk.models.operations;



public class GetBlockResponse {
    public String contentType;
    public GetBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetBlockResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetBlockResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}