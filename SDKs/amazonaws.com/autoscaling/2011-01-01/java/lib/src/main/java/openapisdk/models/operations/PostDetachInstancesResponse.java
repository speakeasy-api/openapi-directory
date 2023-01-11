package openapisdk.models.operations;



public class PostDetachInstancesResponse {
    public byte[] body;
    public PostDetachInstancesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDetachInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDetachInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}