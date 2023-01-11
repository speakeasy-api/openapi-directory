package openapisdk.models.operations;



public class GetPortfolioMembershipsResponse {
    public String contentType;
    public GetPortfolioMembershipsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPortfolioMembershipsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetPortfolioMembershipsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPortfolioMemberships200ApplicationJson getPortfolioMemberships200ApplicationJSONObject;
    public GetPortfolioMembershipsResponse withGetPortfolioMemberships200ApplicationJsonObject(GetPortfolioMemberships200ApplicationJson getPortfolioMemberships200ApplicationJSONObject) {
        this.getPortfolioMemberships200ApplicationJSONObject = getPortfolioMemberships200ApplicationJSONObject;
        return this;
    }
}