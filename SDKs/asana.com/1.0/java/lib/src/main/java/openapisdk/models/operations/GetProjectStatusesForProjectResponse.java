package openapisdk.models.operations;



public class GetProjectStatusesForProjectResponse {
    public String contentType;
    public GetProjectStatusesForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectStatusesForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectStatusesForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectStatusesForProject200ApplicationJson getProjectStatusesForProject200ApplicationJSONObject;
    public GetProjectStatusesForProjectResponse withGetProjectStatusesForProject200ApplicationJsonObject(GetProjectStatusesForProject200ApplicationJson getProjectStatusesForProject200ApplicationJSONObject) {
        this.getProjectStatusesForProject200ApplicationJSONObject = getProjectStatusesForProject200ApplicationJSONObject;
        return this;
    }
}