package openapisdk.models.operations;



public class GetFindingsPublicationConfigurationResponse {
    public Object accessDeniedException;
    public GetFindingsPublicationConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetFindingsPublicationConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetFindingsPublicationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFindingsPublicationConfigurationResponse getFindingsPublicationConfigurationResponse;
    public GetFindingsPublicationConfigurationResponse withGetFindingsPublicationConfigurationResponse(openapisdk.models.shared.GetFindingsPublicationConfigurationResponse getFindingsPublicationConfigurationResponse) {
        this.getFindingsPublicationConfigurationResponse = getFindingsPublicationConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public GetFindingsPublicationConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFindingsPublicationConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetFindingsPublicationConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetFindingsPublicationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFindingsPublicationConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetFindingsPublicationConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}