package openapisdk.models.operations;



public class RemoveSupportingWorkForGoalResponse {
    public String contentType;
    public RemoveSupportingWorkForGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveSupportingWorkForGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveSupportingWorkForGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveSupportingWorkForGoal200ApplicationJson removeSupportingWorkForGoal200ApplicationJSONObject;
    public RemoveSupportingWorkForGoalResponse withRemoveSupportingWorkForGoal200ApplicationJsonObject(RemoveSupportingWorkForGoal200ApplicationJson removeSupportingWorkForGoal200ApplicationJSONObject) {
        this.removeSupportingWorkForGoal200ApplicationJSONObject = removeSupportingWorkForGoal200ApplicationJSONObject;
        return this;
    }
}