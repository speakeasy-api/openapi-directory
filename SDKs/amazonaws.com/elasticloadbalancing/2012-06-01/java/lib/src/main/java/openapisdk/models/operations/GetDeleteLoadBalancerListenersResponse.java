package openapisdk.models.operations;



public class GetDeleteLoadBalancerListenersResponse {
    public byte[] body;
    public GetDeleteLoadBalancerListenersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteLoadBalancerListenersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteLoadBalancerListenersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}