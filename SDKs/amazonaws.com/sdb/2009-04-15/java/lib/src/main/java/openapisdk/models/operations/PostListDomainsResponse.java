package openapisdk.models.operations;



public class PostListDomainsResponse {
    public byte[] body;
    public PostListDomainsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}