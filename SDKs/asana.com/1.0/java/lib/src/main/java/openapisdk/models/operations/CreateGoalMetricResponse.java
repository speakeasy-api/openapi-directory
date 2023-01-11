package openapisdk.models.operations;



public class CreateGoalMetricResponse {
    public String contentType;
    public CreateGoalMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateGoalMetricResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateGoalMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateGoalMetric200ApplicationJson createGoalMetric200ApplicationJSONObject;
    public CreateGoalMetricResponse withCreateGoalMetric200ApplicationJsonObject(CreateGoalMetric200ApplicationJson createGoalMetric200ApplicationJSONObject) {
        this.createGoalMetric200ApplicationJSONObject = createGoalMetric200ApplicationJSONObject;
        return this;
    }
}