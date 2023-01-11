package openapisdk.models.operations;



public class GetPortfoliosResponse {
    public String contentType;
    public GetPortfoliosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetPortfoliosResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetPortfoliosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPortfolios200ApplicationJson getPortfolios200ApplicationJSONObject;
    public GetPortfoliosResponse withGetPortfolios200ApplicationJsonObject(GetPortfolios200ApplicationJson getPortfolios200ApplicationJSONObject) {
        this.getPortfolios200ApplicationJSONObject = getPortfolios200ApplicationJSONObject;
        return this;
    }
}