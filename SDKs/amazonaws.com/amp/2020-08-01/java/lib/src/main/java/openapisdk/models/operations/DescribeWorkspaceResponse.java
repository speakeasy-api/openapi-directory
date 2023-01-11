package openapisdk.models.operations;



public class DescribeWorkspaceResponse {
    public Object accessDeniedException;
    public DescribeWorkspaceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkspaceResponse describeWorkspaceResponse;
    public DescribeWorkspaceResponse withDescribeWorkspaceResponse(openapisdk.models.shared.DescribeWorkspaceResponse describeWorkspaceResponse) {
        this.describeWorkspaceResponse = describeWorkspaceResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeWorkspaceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorkspaceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeWorkspaceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeWorkspaceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}