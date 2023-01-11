package openapisdk.models.operations;



public class GetDiscoveredResourceCountsResponse {
    public String contentType;
    public GetDiscoveredResourceCountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDiscoveredResourceCountsResponse getDiscoveredResourceCountsResponse;
    public GetDiscoveredResourceCountsResponse withGetDiscoveredResourceCountsResponse(openapisdk.models.shared.GetDiscoveredResourceCountsResponse getDiscoveredResourceCountsResponse) {
        this.getDiscoveredResourceCountsResponse = getDiscoveredResourceCountsResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetDiscoveredResourceCountsResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetDiscoveredResourceCountsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Long statusCode;
    public GetDiscoveredResourceCountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetDiscoveredResourceCountsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}