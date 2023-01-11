package openapisdk.models.operations;



public class CreateProfilingGroupResponse {
    public Object conflictException;
    public CreateProfilingGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateProfilingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProfilingGroupResponse createProfilingGroupResponse;
    public CreateProfilingGroupResponse withCreateProfilingGroupResponse(openapisdk.models.shared.CreateProfilingGroupResponse createProfilingGroupResponse) {
        this.createProfilingGroupResponse = createProfilingGroupResponse;
        return this;
    }
    public Object internalServerException;
    public CreateProfilingGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateProfilingGroupResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateProfilingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateProfilingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateProfilingGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}