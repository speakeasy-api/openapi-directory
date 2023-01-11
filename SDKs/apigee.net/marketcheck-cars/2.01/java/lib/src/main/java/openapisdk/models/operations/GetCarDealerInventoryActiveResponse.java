package openapisdk.models.operations;



public class GetCarDealerInventoryActiveResponse {
    public String contentType;
    public GetCarDealerInventoryActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCarDealerInventoryActiveResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public GetCarDealerInventoryActiveResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public GetCarDealerInventoryActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}