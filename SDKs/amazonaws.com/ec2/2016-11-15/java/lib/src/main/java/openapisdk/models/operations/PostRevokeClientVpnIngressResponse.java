package openapisdk.models.operations;



public class PostRevokeClientVpnIngressResponse {
    public byte[] body;
    public PostRevokeClientVpnIngressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRevokeClientVpnIngressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRevokeClientVpnIngressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}