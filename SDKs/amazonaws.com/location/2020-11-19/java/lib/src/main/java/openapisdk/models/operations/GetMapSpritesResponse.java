package openapisdk.models.operations;



public class GetMapSpritesResponse {
    public Object accessDeniedException;
    public GetMapSpritesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetMapSpritesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMapSpritesResponse getMapSpritesResponse;
    public GetMapSpritesResponse withGetMapSpritesResponse(openapisdk.models.shared.GetMapSpritesResponse getMapSpritesResponse) {
        this.getMapSpritesResponse = getMapSpritesResponse;
        return this;
    }
    public Object internalServerException;
    public GetMapSpritesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMapSpritesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMapSpritesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetMapSpritesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetMapSpritesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}