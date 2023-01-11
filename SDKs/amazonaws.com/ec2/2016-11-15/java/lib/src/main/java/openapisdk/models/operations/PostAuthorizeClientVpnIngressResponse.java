package openapisdk.models.operations;



public class PostAuthorizeClientVpnIngressResponse {
    public byte[] body;
    public PostAuthorizeClientVpnIngressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAuthorizeClientVpnIngressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthorizeClientVpnIngressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}