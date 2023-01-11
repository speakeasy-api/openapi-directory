package openapisdk.models.operations;



public class PostGetClusterCredentialsResponse {
    public byte[] body;
    public PostGetClusterCredentialsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetClusterCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetClusterCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}