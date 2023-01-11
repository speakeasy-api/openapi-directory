package openapisdk.models.operations;



public class GetStreamKeyResponse {
    public Object accessDeniedException;
    public GetStreamKeyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetStreamKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStreamKeyResponse getStreamKeyResponse;
    public GetStreamKeyResponse withGetStreamKeyResponse(openapisdk.models.shared.GetStreamKeyResponse getStreamKeyResponse) {
        this.getStreamKeyResponse = getStreamKeyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStreamKeyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetStreamKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetStreamKeyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}