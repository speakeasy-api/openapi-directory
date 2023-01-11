package openapisdk.models.operations;



public class PostModifyClientVpnEndpointResponse {
    public byte[] body;
    public PostModifyClientVpnEndpointResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyClientVpnEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyClientVpnEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}