package openapisdk.models.operations;



public class GetSearchCarIncentiveOemResponse {
    public String contentType;
    public GetSearchCarIncentiveOemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchCarIncentiveOemResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public GetSearchCarIncentiveOemResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchCarIncentiveOemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}