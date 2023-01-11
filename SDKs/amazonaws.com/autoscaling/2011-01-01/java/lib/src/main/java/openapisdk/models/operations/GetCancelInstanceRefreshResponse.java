package openapisdk.models.operations;



public class GetCancelInstanceRefreshResponse {
    public byte[] body;
    public GetCancelInstanceRefreshResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCancelInstanceRefreshResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCancelInstanceRefreshResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}