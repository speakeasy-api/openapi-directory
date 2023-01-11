package openapisdk.models.operations;



public class GetTagResponse {
    public String contentType;
    public GetTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTagResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTag200ApplicationJson getTag200ApplicationJSONObject;
    public GetTagResponse withGetTag200ApplicationJsonObject(GetTag200ApplicationJson getTag200ApplicationJSONObject) {
        this.getTag200ApplicationJSONObject = getTag200ApplicationJSONObject;
        return this;
    }
}