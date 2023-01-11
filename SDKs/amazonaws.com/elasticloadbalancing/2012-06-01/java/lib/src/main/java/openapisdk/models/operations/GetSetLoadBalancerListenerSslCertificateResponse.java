package openapisdk.models.operations;



public class GetSetLoadBalancerListenerSslCertificateResponse {
    public byte[] body;
    public GetSetLoadBalancerListenerSslCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetLoadBalancerListenerSslCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetLoadBalancerListenerSslCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}