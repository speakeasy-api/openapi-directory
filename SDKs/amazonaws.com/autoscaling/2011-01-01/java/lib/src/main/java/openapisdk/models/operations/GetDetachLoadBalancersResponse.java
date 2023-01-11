package openapisdk.models.operations;



public class GetDetachLoadBalancersResponse {
    public byte[] body;
    public GetDetachLoadBalancersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDetachLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDetachLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}