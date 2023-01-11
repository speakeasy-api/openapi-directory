package openapisdk.models.operations;



public class GetSearchCarFsboActiveResponse {
    public String contentType;
    public GetSearchCarFsboActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchCarFsboActiveResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public GetSearchCarFsboActiveResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchCarFsboActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}