package openapisdk.models.operations;



public class UpdateProfilingGroupResponse {
    public Object conflictException;
    public UpdateProfilingGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateProfilingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateProfilingGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProfilingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProfilingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateProfilingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateProfilingGroupResponse updateProfilingGroupResponse;
    public UpdateProfilingGroupResponse withUpdateProfilingGroupResponse(openapisdk.models.shared.UpdateProfilingGroupResponse updateProfilingGroupResponse) {
        this.updateProfilingGroupResponse = updateProfilingGroupResponse;
        return this;
    }
    public Object validationException;
    public UpdateProfilingGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}