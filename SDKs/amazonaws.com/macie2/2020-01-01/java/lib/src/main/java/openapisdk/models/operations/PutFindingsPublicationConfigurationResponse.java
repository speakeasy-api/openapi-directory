package openapisdk.models.operations;



public class PutFindingsPublicationConfigurationResponse {
    public Object accessDeniedException;
    public PutFindingsPublicationConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public PutFindingsPublicationConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutFindingsPublicationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutFindingsPublicationConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public java.util.Map<String, Object> putFindingsPublicationConfigurationResponse;
    public PutFindingsPublicationConfigurationResponse withPutFindingsPublicationConfigurationResponse(java.util.Map<String, Object> putFindingsPublicationConfigurationResponse) {
        this.putFindingsPublicationConfigurationResponse = putFindingsPublicationConfigurationResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutFindingsPublicationConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public PutFindingsPublicationConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public PutFindingsPublicationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutFindingsPublicationConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutFindingsPublicationConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}