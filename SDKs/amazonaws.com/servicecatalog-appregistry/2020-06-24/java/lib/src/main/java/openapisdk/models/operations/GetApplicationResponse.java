package openapisdk.models.operations;



public class GetApplicationResponse {
    public String contentType;
    public GetApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApplicationResponse getApplicationResponse;
    public GetApplicationResponse withGetApplicationResponse(openapisdk.models.shared.GetApplicationResponse getApplicationResponse) {
        this.getApplicationResponse = getApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public GetApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetApplicationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}