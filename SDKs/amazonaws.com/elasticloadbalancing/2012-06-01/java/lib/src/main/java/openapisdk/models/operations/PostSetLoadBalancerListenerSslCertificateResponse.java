package openapisdk.models.operations;



public class PostSetLoadBalancerListenerSslCertificateResponse {
    public byte[] body;
    public PostSetLoadBalancerListenerSslCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetLoadBalancerListenerSslCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetLoadBalancerListenerSslCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}