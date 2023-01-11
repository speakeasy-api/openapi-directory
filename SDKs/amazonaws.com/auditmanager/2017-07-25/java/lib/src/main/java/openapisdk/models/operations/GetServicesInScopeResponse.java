package openapisdk.models.operations;



public class GetServicesInScopeResponse {
    public Object accessDeniedException;
    public GetServicesInScopeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetServicesInScopeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServicesInScopeResponse getServicesInScopeResponse;
    public GetServicesInScopeResponse withGetServicesInScopeResponse(openapisdk.models.shared.GetServicesInScopeResponse getServicesInScopeResponse) {
        this.getServicesInScopeResponse = getServicesInScopeResponse;
        return this;
    }
    public Object internalServerException;
    public GetServicesInScopeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetServicesInScopeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetServicesInScopeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}