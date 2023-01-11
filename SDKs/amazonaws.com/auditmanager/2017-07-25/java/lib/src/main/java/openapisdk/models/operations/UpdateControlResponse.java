package openapisdk.models.operations;



public class UpdateControlResponse {
    public Object accessDeniedException;
    public UpdateControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateControlResponse updateControlResponse;
    public UpdateControlResponse withUpdateControlResponse(openapisdk.models.shared.UpdateControlResponse updateControlResponse) {
        this.updateControlResponse = updateControlResponse;
        return this;
    }
    public Object validationException;
    public UpdateControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}