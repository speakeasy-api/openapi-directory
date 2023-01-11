package openapisdk.models.operations;



public class DescribeAccountAssignmentDeletionStatusResponse {
    public Object accessDeniedException;
    public DescribeAccountAssignmentDeletionStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAccountAssignmentDeletionStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountAssignmentDeletionStatusResponse describeAccountAssignmentDeletionStatusResponse;
    public DescribeAccountAssignmentDeletionStatusResponse withDescribeAccountAssignmentDeletionStatusResponse(openapisdk.models.shared.DescribeAccountAssignmentDeletionStatusResponse describeAccountAssignmentDeletionStatusResponse) {
        this.describeAccountAssignmentDeletionStatusResponse = describeAccountAssignmentDeletionStatusResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAccountAssignmentDeletionStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAccountAssignmentDeletionStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAccountAssignmentDeletionStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAccountAssignmentDeletionStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeAccountAssignmentDeletionStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}