package openapisdk.models.operations;



public class CreateGoalResponse {
    public String contentType;
    public CreateGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateGoal201ApplicationJson createGoal201ApplicationJSONObject;
    public CreateGoalResponse withCreateGoal201ApplicationJsonObject(CreateGoal201ApplicationJson createGoal201ApplicationJSONObject) {
        this.createGoal201ApplicationJSONObject = createGoal201ApplicationJSONObject;
        return this;
    }
}