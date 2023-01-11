package openapisdk.models.operations;



public class PostDeregisterInstancesFromLoadBalancerResponse {
    public byte[] body;
    public PostDeregisterInstancesFromLoadBalancerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeregisterInstancesFromLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeregisterInstancesFromLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}