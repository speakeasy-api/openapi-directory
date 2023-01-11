package openapisdk.models.operations;



public class UpdateLogPatternResponse {
    public String contentType;
    public UpdateLogPatternResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateLogPatternResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateLogPatternResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLogPatternResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateLogPatternResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateLogPatternResponse updateLogPatternResponse;
    public UpdateLogPatternResponse withUpdateLogPatternResponse(openapisdk.models.shared.UpdateLogPatternResponse updateLogPatternResponse) {
        this.updateLogPatternResponse = updateLogPatternResponse;
        return this;
    }
    public Object validationException;
    public UpdateLogPatternResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}