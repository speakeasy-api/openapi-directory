package openapisdk.models.operations;



public class GetDiscoverySummaryResponse {
    public Object authorizationErrorException;
    public GetDiscoverySummaryResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public GetDiscoverySummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDiscoverySummaryResponse getDiscoverySummaryResponse;
    public GetDiscoverySummaryResponse withGetDiscoverySummaryResponse(openapisdk.models.shared.GetDiscoverySummaryResponse getDiscoverySummaryResponse) {
        this.getDiscoverySummaryResponse = getDiscoverySummaryResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public GetDiscoverySummaryResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public GetDiscoverySummaryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetDiscoverySummaryResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public GetDiscoverySummaryResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public GetDiscoverySummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}