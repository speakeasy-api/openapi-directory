package openapisdk.models.operations;



public class GetRecallHistoryResponse {
    public String contentType;
    public GetRecallHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetRecallHistoryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public GetRecallHistoryResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public GetRecallHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}