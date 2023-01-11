package openapisdk.models.operations;



public class GetTaskCountsForProjectResponse {
    public String contentType;
    public GetTaskCountsForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTaskCountsForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTaskCountsForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTaskCountsForProject200ApplicationJson getTaskCountsForProject200ApplicationJSONObject;
    public GetTaskCountsForProjectResponse withGetTaskCountsForProject200ApplicationJsonObject(GetTaskCountsForProject200ApplicationJson getTaskCountsForProject200ApplicationJSONObject) {
        this.getTaskCountsForProject200ApplicationJSONObject = getTaskCountsForProject200ApplicationJSONObject;
        return this;
    }
}