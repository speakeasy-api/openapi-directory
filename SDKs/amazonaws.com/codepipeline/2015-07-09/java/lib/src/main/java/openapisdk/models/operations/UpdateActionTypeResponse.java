package openapisdk.models.operations;



public class UpdateActionTypeResponse {
    public Object actionTypeNotFoundException;
    public UpdateActionTypeResponse withActionTypeNotFoundException(Object actionTypeNotFoundException) {
        this.actionTypeNotFoundException = actionTypeNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateActionTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestFailedException;
    public UpdateActionTypeResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Long statusCode;
    public UpdateActionTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateActionTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}