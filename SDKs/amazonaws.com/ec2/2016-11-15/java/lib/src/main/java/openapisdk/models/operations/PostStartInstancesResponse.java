package openapisdk.models.operations;



public class PostStartInstancesResponse {
    public byte[] body;
    public PostStartInstancesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStartInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStartInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}