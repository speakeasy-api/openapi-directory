package openapisdk.models.operations;



public class DescribeElasticLoadBalancersResponse {
    public String contentType;
    public DescribeElasticLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeElasticLoadBalancersResult describeElasticLoadBalancersResult;
    public DescribeElasticLoadBalancersResponse withDescribeElasticLoadBalancersResult(openapisdk.models.shared.DescribeElasticLoadBalancersResult describeElasticLoadBalancersResult) {
        this.describeElasticLoadBalancersResult = describeElasticLoadBalancersResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeElasticLoadBalancersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeElasticLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeElasticLoadBalancersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}