package openapisdk.models.operations;



public class GetDealItemsResponse {
    public String contentType;
    public GetDealItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DealItemSearchResponse dealItemSearchResponse;
    public GetDealItemsResponse withDealItemSearchResponse(openapisdk.models.shared.DealItemSearchResponse dealItemSearchResponse) {
        this.dealItemSearchResponse = dealItemSearchResponse;
        return this;
    }
    public Long statusCode;
    public GetDealItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}