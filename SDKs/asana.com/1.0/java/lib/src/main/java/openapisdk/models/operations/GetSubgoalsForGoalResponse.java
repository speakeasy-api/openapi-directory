package openapisdk.models.operations;



public class GetSubgoalsForGoalResponse {
    public String contentType;
    public GetSubgoalsForGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetSubgoalsForGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetSubgoalsForGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSubgoalsForGoal200ApplicationJson getSubgoalsForGoal200ApplicationJSONObject;
    public GetSubgoalsForGoalResponse withGetSubgoalsForGoal200ApplicationJsonObject(GetSubgoalsForGoal200ApplicationJson getSubgoalsForGoal200ApplicationJSONObject) {
        this.getSubgoalsForGoal200ApplicationJSONObject = getSubgoalsForGoal200ApplicationJSONObject;
        return this;
    }
}