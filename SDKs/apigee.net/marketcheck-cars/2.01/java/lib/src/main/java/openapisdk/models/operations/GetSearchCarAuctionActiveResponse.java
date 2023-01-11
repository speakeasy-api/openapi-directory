package openapisdk.models.operations;



public class GetSearchCarAuctionActiveResponse {
    public String contentType;
    public GetSearchCarAuctionActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchCarAuctionActiveResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public GetSearchCarAuctionActiveResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchCarAuctionActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}