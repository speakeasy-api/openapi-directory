package openapisdk.models.operations;



public class DescribeDeploymentsResponse {
    public String contentType;
    public DescribeDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeploymentsResult describeDeploymentsResult;
    public DescribeDeploymentsResponse withDescribeDeploymentsResult(openapisdk.models.shared.DescribeDeploymentsResult describeDeploymentsResult) {
        this.describeDeploymentsResult = describeDeploymentsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDeploymentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeDeploymentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}