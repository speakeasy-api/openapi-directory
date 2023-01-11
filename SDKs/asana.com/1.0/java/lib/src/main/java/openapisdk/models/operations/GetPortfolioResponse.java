package openapisdk.models.operations;



public class GetPortfolioResponse {
    public String contentType;
    public GetPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPortfolio200ApplicationJson getPortfolio200ApplicationJSONObject;
    public GetPortfolioResponse withGetPortfolio200ApplicationJsonObject(GetPortfolio200ApplicationJson getPortfolio200ApplicationJSONObject) {
        this.getPortfolio200ApplicationJSONObject = getPortfolio200ApplicationJSONObject;
        return this;
    }
}