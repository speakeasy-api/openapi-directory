package openapisdk.models.operations;



public class UpdateServiceSettingsResponse {
    public Object accessDeniedException;
    public UpdateServiceSettingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public UpdateServiceSettingsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public UpdateServiceSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateServiceSettingsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object rateLimitExceededException;
    public UpdateServiceSettingsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public UpdateServiceSettingsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public UpdateServiceSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateServiceSettingsResponse;
    public UpdateServiceSettingsResponse withUpdateServiceSettingsResponse(java.util.Map<String, Object> updateServiceSettingsResponse) {
        this.updateServiceSettingsResponse = updateServiceSettingsResponse;
        return this;
    }
}