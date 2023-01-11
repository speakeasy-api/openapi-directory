package openapisdk.models.operations;



public class GetActionResponse {
    public String contentType;
    public GetActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetActionResponse getActionResponse;
    public GetActionResponse withGetActionResponse(openapisdk.models.shared.GetActionResponse getActionResponse) {
        this.getActionResponse = getActionResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetActionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}