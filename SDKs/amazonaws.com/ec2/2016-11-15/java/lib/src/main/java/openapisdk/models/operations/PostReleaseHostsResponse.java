package openapisdk.models.operations;



public class PostReleaseHostsResponse {
    public byte[] body;
    public PostReleaseHostsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostReleaseHostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostReleaseHostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}