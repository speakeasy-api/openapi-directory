package openapisdk.models.operations;



public class DeleteGoalResponse {
    public String contentType;
    public DeleteGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteGoal200ApplicationJson deleteGoal200ApplicationJSONObject;
    public DeleteGoalResponse withDeleteGoal200ApplicationJsonObject(DeleteGoal200ApplicationJson deleteGoal200ApplicationJSONObject) {
        this.deleteGoal200ApplicationJSONObject = deleteGoal200ApplicationJSONObject;
        return this;
    }
}