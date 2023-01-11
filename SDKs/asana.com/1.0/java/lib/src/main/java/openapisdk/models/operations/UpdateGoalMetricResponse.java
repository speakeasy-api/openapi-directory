package openapisdk.models.operations;



public class UpdateGoalMetricResponse {
    public String contentType;
    public UpdateGoalMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateGoalMetricResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateGoalMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateGoalMetric200ApplicationJson updateGoalMetric200ApplicationJSONObject;
    public UpdateGoalMetricResponse withUpdateGoalMetric200ApplicationJsonObject(UpdateGoalMetric200ApplicationJson updateGoalMetric200ApplicationJSONObject) {
        this.updateGoalMetric200ApplicationJSONObject = updateGoalMetric200ApplicationJSONObject;
        return this;
    }
}