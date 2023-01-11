package openapisdk.models.operations;



public class DescribeCommandsResponse {
    public String contentType;
    public DescribeCommandsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCommandsResult describeCommandsResult;
    public DescribeCommandsResponse withDescribeCommandsResult(openapisdk.models.shared.DescribeCommandsResult describeCommandsResult) {
        this.describeCommandsResult = describeCommandsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCommandsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCommandsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeCommandsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}