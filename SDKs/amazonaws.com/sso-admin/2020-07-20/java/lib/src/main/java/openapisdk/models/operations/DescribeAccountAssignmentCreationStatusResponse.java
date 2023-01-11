package openapisdk.models.operations;



public class DescribeAccountAssignmentCreationStatusResponse {
    public Object accessDeniedException;
    public DescribeAccountAssignmentCreationStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAccountAssignmentCreationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountAssignmentCreationStatusResponse describeAccountAssignmentCreationStatusResponse;
    public DescribeAccountAssignmentCreationStatusResponse withDescribeAccountAssignmentCreationStatusResponse(openapisdk.models.shared.DescribeAccountAssignmentCreationStatusResponse describeAccountAssignmentCreationStatusResponse) {
        this.describeAccountAssignmentCreationStatusResponse = describeAccountAssignmentCreationStatusResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAccountAssignmentCreationStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAccountAssignmentCreationStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAccountAssignmentCreationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAccountAssignmentCreationStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeAccountAssignmentCreationStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}