package openapisdk.models.operations;



public class UpdateComponentResponse {
    public String contentType;
    public UpdateComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateComponentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateComponentResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateComponentResponse;
    public UpdateComponentResponse withUpdateComponentResponse(java.util.Map<String, Object> updateComponentResponse) {
        this.updateComponentResponse = updateComponentResponse;
        return this;
    }
    public Object validationException;
    public UpdateComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}