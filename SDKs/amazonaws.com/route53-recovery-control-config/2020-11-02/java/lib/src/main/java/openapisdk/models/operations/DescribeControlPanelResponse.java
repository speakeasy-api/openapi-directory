package openapisdk.models.operations;



public class DescribeControlPanelResponse {
    public Object accessDeniedException;
    public DescribeControlPanelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DescribeControlPanelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeControlPanelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeControlPanelResponse describeControlPanelResponse;
    public DescribeControlPanelResponse withDescribeControlPanelResponse(openapisdk.models.shared.DescribeControlPanelResponse describeControlPanelResponse) {
        this.describeControlPanelResponse = describeControlPanelResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeControlPanelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeControlPanelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeControlPanelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeControlPanelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeControlPanelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}