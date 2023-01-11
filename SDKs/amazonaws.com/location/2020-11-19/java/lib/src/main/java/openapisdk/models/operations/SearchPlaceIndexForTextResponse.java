package openapisdk.models.operations;



public class SearchPlaceIndexForTextResponse {
    public Object accessDeniedException;
    public SearchPlaceIndexForTextResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchPlaceIndexForTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SearchPlaceIndexForTextResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchPlaceIndexForTextResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchPlaceIndexForTextResponse searchPlaceIndexForTextResponse;
    public SearchPlaceIndexForTextResponse withSearchPlaceIndexForTextResponse(openapisdk.models.shared.SearchPlaceIndexForTextResponse searchPlaceIndexForTextResponse) {
        this.searchPlaceIndexForTextResponse = searchPlaceIndexForTextResponse;
        return this;
    }
    public Long statusCode;
    public SearchPlaceIndexForTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchPlaceIndexForTextResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SearchPlaceIndexForTextResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}