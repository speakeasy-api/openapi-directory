package openapisdk.models.operations;



public class ListPlaceIndexesResponse {
    public Object accessDeniedException;
    public ListPlaceIndexesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPlaceIndexesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPlaceIndexesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListPlaceIndexesResponse listPlaceIndexesResponse;
    public ListPlaceIndexesResponse withListPlaceIndexesResponse(openapisdk.models.shared.ListPlaceIndexesResponse listPlaceIndexesResponse) {
        this.listPlaceIndexesResponse = listPlaceIndexesResponse;
        return this;
    }
    public Long statusCode;
    public ListPlaceIndexesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPlaceIndexesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListPlaceIndexesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}