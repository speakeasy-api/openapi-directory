package openapisdk.models.operations;



public class PostModifyHostsResponse {
    public byte[] body;
    public PostModifyHostsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyHostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyHostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}