package openapisdk.models.operations;



public class DescribeAgentVersionsResponse {
    public String contentType;
    public DescribeAgentVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAgentVersionsResult describeAgentVersionsResult;
    public DescribeAgentVersionsResponse withDescribeAgentVersionsResult(openapisdk.models.shared.DescribeAgentVersionsResult describeAgentVersionsResult) {
        this.describeAgentVersionsResult = describeAgentVersionsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAgentVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAgentVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeAgentVersionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}