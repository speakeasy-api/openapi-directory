package openapisdk.models.operations;



public class GetMapTileResponse {
    public Object accessDeniedException;
    public GetMapTileResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetMapTileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMapTileResponse getMapTileResponse;
    public GetMapTileResponse withGetMapTileResponse(openapisdk.models.shared.GetMapTileResponse getMapTileResponse) {
        this.getMapTileResponse = getMapTileResponse;
        return this;
    }
    public Object internalServerException;
    public GetMapTileResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMapTileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMapTileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetMapTileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetMapTileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}