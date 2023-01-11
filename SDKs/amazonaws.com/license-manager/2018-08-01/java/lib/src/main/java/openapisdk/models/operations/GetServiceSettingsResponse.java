package openapisdk.models.operations;



public class GetServiceSettingsResponse {
    public Object accessDeniedException;
    public GetServiceSettingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object authorizationException;
    public GetServiceSettingsResponse withAuthorizationException(Object authorizationException) {
        this.authorizationException = authorizationException;
        return this;
    }
    public String contentType;
    public GetServiceSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceSettingsResponse getServiceSettingsResponse;
    public GetServiceSettingsResponse withGetServiceSettingsResponse(openapisdk.models.shared.GetServiceSettingsResponse getServiceSettingsResponse) {
        this.getServiceSettingsResponse = getServiceSettingsResponse;
        return this;
    }
    public Object rateLimitExceededException;
    public GetServiceSettingsResponse withRateLimitExceededException(Object rateLimitExceededException) {
        this.rateLimitExceededException = rateLimitExceededException;
        return this;
    }
    public Object serverInternalException;
    public GetServiceSettingsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Long statusCode;
    public GetServiceSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}