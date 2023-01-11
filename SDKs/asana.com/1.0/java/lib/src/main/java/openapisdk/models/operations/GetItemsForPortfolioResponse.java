package openapisdk.models.operations;



public class GetItemsForPortfolioResponse {
    public String contentType;
    public GetItemsForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetItemsForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetItemsForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetItemsForPortfolio200ApplicationJson getItemsForPortfolio200ApplicationJSONObject;
    public GetItemsForPortfolioResponse withGetItemsForPortfolio200ApplicationJsonObject(GetItemsForPortfolio200ApplicationJson getItemsForPortfolio200ApplicationJSONObject) {
        this.getItemsForPortfolio200ApplicationJSONObject = getItemsForPortfolio200ApplicationJSONObject;
        return this;
    }
}