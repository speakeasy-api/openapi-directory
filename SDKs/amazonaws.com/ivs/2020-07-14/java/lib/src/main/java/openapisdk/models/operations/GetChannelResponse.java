package openapisdk.models.operations;



public class GetChannelResponse {
    public Object accessDeniedException;
    public GetChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetChannelResponse getChannelResponse;
    public GetChannelResponse withGetChannelResponse(openapisdk.models.shared.GetChannelResponse getChannelResponse) {
        this.getChannelResponse = getChannelResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}