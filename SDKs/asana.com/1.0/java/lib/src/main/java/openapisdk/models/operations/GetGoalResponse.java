package openapisdk.models.operations;



public class GetGoalResponse {
    public String contentType;
    public GetGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetGoal200ApplicationJson getGoal200ApplicationJSONObject;
    public GetGoalResponse withGetGoal200ApplicationJsonObject(GetGoal200ApplicationJson getGoal200ApplicationJSONObject) {
        this.getGoal200ApplicationJSONObject = getGoal200ApplicationJSONObject;
        return this;
    }
}