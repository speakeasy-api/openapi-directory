package openapisdk.models.operations;



public class AttachElasticLoadBalancerResponse {
    public String contentType;
    public AttachElasticLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public AttachElasticLoadBalancerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AttachElasticLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AttachElasticLoadBalancerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}