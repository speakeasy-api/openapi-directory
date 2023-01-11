package openapisdk.models.operations;



public class DescribeDeploymentJobResponse {
    public String contentType;
    public DescribeDeploymentJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeploymentJobResponse describeDeploymentJobResponse;
    public DescribeDeploymentJobResponse withDescribeDeploymentJobResponse(openapisdk.models.shared.DescribeDeploymentJobResponse describeDeploymentJobResponse) {
        this.describeDeploymentJobResponse = describeDeploymentJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeDeploymentJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeDeploymentJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDeploymentJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDeploymentJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDeploymentJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}