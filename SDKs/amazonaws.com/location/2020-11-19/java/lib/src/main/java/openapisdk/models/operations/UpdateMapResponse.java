package openapisdk.models.operations;



public class UpdateMapResponse {
    public Object accessDeniedException;
    public UpdateMapResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateMapResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateMapResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateMapResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateMapResponse updateMapResponse;
    public UpdateMapResponse withUpdateMapResponse(openapisdk.models.shared.UpdateMapResponse updateMapResponse) {
        this.updateMapResponse = updateMapResponse;
        return this;
    }
    public Object validationException;
    public UpdateMapResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}