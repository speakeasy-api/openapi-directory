package openapisdk.models.operations;



public class ListPlacementsResponse {
    public String contentType;
    public ListPlacementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPlacementsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPlacementsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPlacementsResponse listPlacementsResponse;
    public ListPlacementsResponse withListPlacementsResponse(openapisdk.models.shared.ListPlacementsResponse listPlacementsResponse) {
        this.listPlacementsResponse = listPlacementsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPlacementsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPlacementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}