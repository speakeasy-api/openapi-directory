package openapisdk.models.operations;



public class AddSupportingWorkForGoalResponse {
    public String contentType;
    public AddSupportingWorkForGoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddSupportingWorkForGoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddSupportingWorkForGoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddSupportingWorkForGoal200ApplicationJson addSupportingWorkForGoal200ApplicationJSONObject;
    public AddSupportingWorkForGoalResponse withAddSupportingWorkForGoal200ApplicationJsonObject(AddSupportingWorkForGoal200ApplicationJson addSupportingWorkForGoal200ApplicationJSONObject) {
        this.addSupportingWorkForGoal200ApplicationJSONObject = addSupportingWorkForGoal200ApplicationJSONObject;
        return this;
    }
}