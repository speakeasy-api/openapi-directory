package openapisdk.models.operations;



public class GetMapGlyphsResponse {
    public Object accessDeniedException;
    public GetMapGlyphsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetMapGlyphsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMapGlyphsResponse getMapGlyphsResponse;
    public GetMapGlyphsResponse withGetMapGlyphsResponse(openapisdk.models.shared.GetMapGlyphsResponse getMapGlyphsResponse) {
        this.getMapGlyphsResponse = getMapGlyphsResponse;
        return this;
    }
    public Object internalServerException;
    public GetMapGlyphsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMapGlyphsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMapGlyphsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetMapGlyphsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetMapGlyphsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}