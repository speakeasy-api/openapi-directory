package openapisdk.models.operations;



public class DescribeEcsClustersResponse {
    public String contentType;
    public DescribeEcsClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEcsClustersResult describeEcsClustersResult;
    public DescribeEcsClustersResponse withDescribeEcsClustersResult(openapisdk.models.shared.DescribeEcsClustersResult describeEcsClustersResult) {
        this.describeEcsClustersResult = describeEcsClustersResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEcsClustersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEcsClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeEcsClustersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}