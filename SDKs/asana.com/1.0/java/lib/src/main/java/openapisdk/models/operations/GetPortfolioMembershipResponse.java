package openapisdk.models.operations;



public class GetPortfolioMembershipResponse {
    public String contentType;
    public GetPortfolioMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPortfolioMembershipResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetPortfolioMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPortfolioMembership200ApplicationJson getPortfolioMembership200ApplicationJSONObject;
    public GetPortfolioMembershipResponse withGetPortfolioMembership200ApplicationJsonObject(GetPortfolioMembership200ApplicationJson getPortfolioMembership200ApplicationJSONObject) {
        this.getPortfolioMembership200ApplicationJSONObject = getPortfolioMembership200ApplicationJSONObject;
        return this;
    }
}