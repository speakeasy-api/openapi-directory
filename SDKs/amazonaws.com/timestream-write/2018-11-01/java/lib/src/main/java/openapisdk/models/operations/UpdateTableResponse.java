package openapisdk.models.operations;



public class UpdateTableResponse {
    public Object accessDeniedException;
    public UpdateTableResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateTableResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public UpdateTableResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateTableResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateTableResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateTableResponse updateTableResponse;
    public UpdateTableResponse withUpdateTableResponse(openapisdk.models.shared.UpdateTableResponse updateTableResponse) {
        this.updateTableResponse = updateTableResponse;
        return this;
    }
    public Object validationException;
    public UpdateTableResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}