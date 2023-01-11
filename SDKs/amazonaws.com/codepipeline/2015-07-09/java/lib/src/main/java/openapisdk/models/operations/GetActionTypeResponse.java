package openapisdk.models.operations;



public class GetActionTypeResponse {
    public Object actionTypeNotFoundException;
    public GetActionTypeResponse withActionTypeNotFoundException(Object actionTypeNotFoundException) {
        this.actionTypeNotFoundException = actionTypeNotFoundException;
        return this;
    }
    public String contentType;
    public GetActionTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetActionTypeOutput getActionTypeOutput;
    public GetActionTypeResponse withGetActionTypeOutput(openapisdk.models.shared.GetActionTypeOutput getActionTypeOutput) {
        this.getActionTypeOutput = getActionTypeOutput;
        return this;
    }
    public Long statusCode;
    public GetActionTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetActionTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}