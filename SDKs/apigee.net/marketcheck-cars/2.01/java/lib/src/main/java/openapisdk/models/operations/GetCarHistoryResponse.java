package openapisdk.models.operations;



public class GetCarHistoryResponse {
    public String contentType;
    public GetCarHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCarHistoryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.HistoricalListing[] historicalListings;
    public GetCarHistoryResponse withHistoricalListings(openapisdk.models.shared.HistoricalListing[] historicalListings) {
        this.historicalListings = historicalListings;
        return this;
    }
    public Long statusCode;
    public GetCarHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}