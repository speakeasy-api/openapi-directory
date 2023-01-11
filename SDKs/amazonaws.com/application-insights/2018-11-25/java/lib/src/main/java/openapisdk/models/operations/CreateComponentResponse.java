package openapisdk.models.operations;



public class CreateComponentResponse {
    public String contentType;
    public CreateComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createComponentResponse;
    public CreateComponentResponse withCreateComponentResponse(java.util.Map<String, Object> createComponentResponse) {
        this.createComponentResponse = createComponentResponse;
        return this;
    }
    public Object internalServerException;
    public CreateComponentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceInUseException;
    public CreateComponentResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}