package openapisdk.models.operations;



public class DescribeElasticIpsResponse {
    public String contentType;
    public DescribeElasticIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeElasticIpsResult describeElasticIpsResult;
    public DescribeElasticIpsResponse withDescribeElasticIpsResult(openapisdk.models.shared.DescribeElasticIpsResult describeElasticIpsResult) {
        this.describeElasticIpsResult = describeElasticIpsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeElasticIpsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeElasticIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeElasticIpsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}