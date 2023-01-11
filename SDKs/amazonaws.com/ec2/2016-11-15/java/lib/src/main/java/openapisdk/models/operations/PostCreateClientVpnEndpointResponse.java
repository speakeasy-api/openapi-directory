package openapisdk.models.operations;



public class PostCreateClientVpnEndpointResponse {
    public byte[] body;
    public PostCreateClientVpnEndpointResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateClientVpnEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateClientVpnEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}