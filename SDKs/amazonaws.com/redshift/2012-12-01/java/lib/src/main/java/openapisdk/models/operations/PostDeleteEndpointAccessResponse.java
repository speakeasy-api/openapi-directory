package openapisdk.models.operations;



public class PostDeleteEndpointAccessResponse {
    public byte[] body;
    public PostDeleteEndpointAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteEndpointAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteEndpointAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}