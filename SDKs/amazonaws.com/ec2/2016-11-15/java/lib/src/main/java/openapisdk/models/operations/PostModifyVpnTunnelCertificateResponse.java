package openapisdk.models.operations;



public class PostModifyVpnTunnelCertificateResponse {
    public byte[] body;
    public PostModifyVpnTunnelCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyVpnTunnelCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyVpnTunnelCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}