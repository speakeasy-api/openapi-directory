package openapisdk.models.operations;



public class DeleteProfilingGroupResponse {
    public Object conflictException;
    public DeleteProfilingGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteProfilingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProfilingGroupResponse;
    public DeleteProfilingGroupResponse withDeleteProfilingGroupResponse(java.util.Map<String, Object> deleteProfilingGroupResponse) {
        this.deleteProfilingGroupResponse = deleteProfilingGroupResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteProfilingGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProfilingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProfilingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteProfilingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteProfilingGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}