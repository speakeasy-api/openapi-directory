package openapisdk.models.operations;



public class AssociateTrackerConsumerResponse {
    public Object accessDeniedException;
    public AssociateTrackerConsumerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> associateTrackerConsumerResponse;
    public AssociateTrackerConsumerResponse withAssociateTrackerConsumerResponse(java.util.Map<String, Object> associateTrackerConsumerResponse) {
        this.associateTrackerConsumerResponse = associateTrackerConsumerResponse;
        return this;
    }
    public Object conflictException;
    public AssociateTrackerConsumerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AssociateTrackerConsumerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AssociateTrackerConsumerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateTrackerConsumerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AssociateTrackerConsumerResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AssociateTrackerConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateTrackerConsumerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AssociateTrackerConsumerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}