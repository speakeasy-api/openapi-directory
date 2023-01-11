package openapisdk.models.operations;



public class PostDeleteDbProxyEndpointResponse {
    public byte[] body;
    public PostDeleteDbProxyEndpointResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteDbProxyEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteDbProxyEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}