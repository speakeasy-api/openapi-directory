package openapisdk.models.operations;



public class DeleteInstanceAccessControlAttributeConfigurationResponse {
    public Object accessDeniedException;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteInstanceAccessControlAttributeConfigurationResponse;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withDeleteInstanceAccessControlAttributeConfigurationResponse(java.util.Map<String, Object> deleteInstanceAccessControlAttributeConfigurationResponse) {
        this.deleteInstanceAccessControlAttributeConfigurationResponse = deleteInstanceAccessControlAttributeConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteInstanceAccessControlAttributeConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}