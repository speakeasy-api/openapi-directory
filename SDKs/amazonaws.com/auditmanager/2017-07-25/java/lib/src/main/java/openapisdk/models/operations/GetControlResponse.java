package openapisdk.models.operations;



public class GetControlResponse {
    public Object accessDeniedException;
    public GetControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetControlResponse getControlResponse;
    public GetControlResponse withGetControlResponse(openapisdk.models.shared.GetControlResponse getControlResponse) {
        this.getControlResponse = getControlResponse;
        return this;
    }
    public Object internalServerException;
    public GetControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}