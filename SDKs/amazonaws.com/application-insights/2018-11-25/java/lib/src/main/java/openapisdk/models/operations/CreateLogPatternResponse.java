package openapisdk.models.operations;



public class CreateLogPatternResponse {
    public String contentType;
    public CreateLogPatternResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLogPatternResponse createLogPatternResponse;
    public CreateLogPatternResponse withCreateLogPatternResponse(openapisdk.models.shared.CreateLogPatternResponse createLogPatternResponse) {
        this.createLogPatternResponse = createLogPatternResponse;
        return this;
    }
    public Object internalServerException;
    public CreateLogPatternResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceInUseException;
    public CreateLogPatternResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateLogPatternResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateLogPatternResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateLogPatternResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}