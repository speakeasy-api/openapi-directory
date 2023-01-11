package openapisdk.models.operations;



public class ListInstalledComponentsResponse {
    public Object accessDeniedException;
    public ListInstalledComponentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListInstalledComponentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListInstalledComponentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListInstalledComponentsResponse listInstalledComponentsResponse;
    public ListInstalledComponentsResponse withListInstalledComponentsResponse(openapisdk.models.shared.ListInstalledComponentsResponse listInstalledComponentsResponse) {
        this.listInstalledComponentsResponse = listInstalledComponentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListInstalledComponentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListInstalledComponentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListInstalledComponentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListInstalledComponentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}