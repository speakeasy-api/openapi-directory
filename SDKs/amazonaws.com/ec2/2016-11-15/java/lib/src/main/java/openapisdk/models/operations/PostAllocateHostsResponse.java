package openapisdk.models.operations;



public class PostAllocateHostsResponse {
    public byte[] body;
    public PostAllocateHostsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAllocateHostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAllocateHostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}