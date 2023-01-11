package openapisdk.models.operations;



public class GetProjectStatusResponse {
    public String contentType;
    public GetProjectStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectStatusResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectStatus200ApplicationJson getProjectStatus200ApplicationJSONObject;
    public GetProjectStatusResponse withGetProjectStatus200ApplicationJsonObject(GetProjectStatus200ApplicationJson getProjectStatus200ApplicationJSONObject) {
        this.getProjectStatus200ApplicationJSONObject = getProjectStatus200ApplicationJSONObject;
        return this;
    }
}