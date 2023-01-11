package openapisdk.models.operations;



public class GetResizeClusterResponse {
    public byte[] body;
    public GetResizeClusterResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetResizeClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResizeClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}