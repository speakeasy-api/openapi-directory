package openapisdk.models.operations;



public class SearchPlaceIndexForPositionResponse {
    public Object accessDeniedException;
    public SearchPlaceIndexForPositionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchPlaceIndexForPositionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SearchPlaceIndexForPositionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchPlaceIndexForPositionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchPlaceIndexForPositionResponse searchPlaceIndexForPositionResponse;
    public SearchPlaceIndexForPositionResponse withSearchPlaceIndexForPositionResponse(openapisdk.models.shared.SearchPlaceIndexForPositionResponse searchPlaceIndexForPositionResponse) {
        this.searchPlaceIndexForPositionResponse = searchPlaceIndexForPositionResponse;
        return this;
    }
    public Long statusCode;
    public SearchPlaceIndexForPositionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchPlaceIndexForPositionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SearchPlaceIndexForPositionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}