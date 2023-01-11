package openapisdk.models.operations;



public class UpdateGoalResponse {
    public String contentType;
    public UpdateGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateGoal200ApplicationJson updateGoal200ApplicationJSONObject;
    public UpdateGoalResponse withUpdateGoal200ApplicationJsonObject(UpdateGoal200ApplicationJson updateGoal200ApplicationJSONObject) {
        this.updateGoal200ApplicationJSONObject = updateGoal200ApplicationJSONObject;
        return this;
    }
}