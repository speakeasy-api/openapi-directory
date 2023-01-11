package openapisdk.models.operations;



public class SearchProfilesResponse {
    public Object accessDeniedException;
    public SearchProfilesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public SearchProfilesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public SearchProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SearchProfilesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchProfilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchProfilesResponse searchProfilesResponse;
    public SearchProfilesResponse withSearchProfilesResponse(openapisdk.models.shared.SearchProfilesResponse searchProfilesResponse) {
        this.searchProfilesResponse = searchProfilesResponse;
        return this;
    }
    public Long statusCode;
    public SearchProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchProfilesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}