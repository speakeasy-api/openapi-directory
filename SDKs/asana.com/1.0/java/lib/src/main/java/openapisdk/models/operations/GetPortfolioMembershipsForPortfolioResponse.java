package openapisdk.models.operations;



public class GetPortfolioMembershipsForPortfolioResponse {
    public String contentType;
    public GetPortfolioMembershipsForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPortfolioMembershipsForPortfolioResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetPortfolioMembershipsForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPortfolioMembershipsForPortfolio200ApplicationJson getPortfolioMembershipsForPortfolio200ApplicationJSONObject;
    public GetPortfolioMembershipsForPortfolioResponse withGetPortfolioMembershipsForPortfolio200ApplicationJsonObject(GetPortfolioMembershipsForPortfolio200ApplicationJson getPortfolioMembershipsForPortfolio200ApplicationJSONObject) {
        this.getPortfolioMembershipsForPortfolio200ApplicationJSONObject = getPortfolioMembershipsForPortfolio200ApplicationJSONObject;
        return this;
    }
}