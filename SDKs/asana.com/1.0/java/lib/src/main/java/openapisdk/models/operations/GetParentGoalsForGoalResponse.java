package openapisdk.models.operations;



public class GetParentGoalsForGoalResponse {
    public String contentType;
    public GetParentGoalsForGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetParentGoalsForGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetParentGoalsForGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetParentGoalsForGoal200ApplicationJson getParentGoalsForGoal200ApplicationJSONObject;
    public GetParentGoalsForGoalResponse withGetParentGoalsForGoal200ApplicationJsonObject(GetParentGoalsForGoal200ApplicationJson getParentGoalsForGoal200ApplicationJSONObject) {
        this.getParentGoalsForGoal200ApplicationJSONObject = getParentGoalsForGoal200ApplicationJSONObject;
        return this;
    }
}