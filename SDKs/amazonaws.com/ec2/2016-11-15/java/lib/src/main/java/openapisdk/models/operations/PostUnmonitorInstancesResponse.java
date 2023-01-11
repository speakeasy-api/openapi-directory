package openapisdk.models.operations;



public class PostUnmonitorInstancesResponse {
    public byte[] body;
    public PostUnmonitorInstancesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUnmonitorInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUnmonitorInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}