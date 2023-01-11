package openapisdk.models.operations;



public class SearchEntitiesResponse {
    public String contentType;
    public SearchEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public SearchEntitiesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public SearchEntitiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.SearchEntitiesResponse searchEntitiesResponse;
    public SearchEntitiesResponse withSearchEntitiesResponse(openapisdk.models.shared.SearchEntitiesResponse searchEntitiesResponse) {
        this.searchEntitiesResponse = searchEntitiesResponse;
        return this;
    }
    public Long statusCode;
    public SearchEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchEntitiesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}