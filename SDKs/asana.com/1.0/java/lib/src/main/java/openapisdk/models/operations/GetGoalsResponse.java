package openapisdk.models.operations;



public class GetGoalsResponse {
    public String contentType;
    public GetGoalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetGoalsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetGoalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetGoals200ApplicationJson getGoals200ApplicationJSONObject;
    public GetGoalsResponse withGetGoals200ApplicationJsonObject(GetGoals200ApplicationJson getGoals200ApplicationJSONObject) {
        this.getGoals200ApplicationJSONObject = getGoals200ApplicationJSONObject;
        return this;
    }
}