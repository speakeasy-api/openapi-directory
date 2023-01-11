package openapisdk.models.operations;



public class GetProjectsResponse {
    public String contentType;
    public GetProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjects200ApplicationJson getProjects200ApplicationJSONObject;
    public GetProjectsResponse withGetProjects200ApplicationJsonObject(GetProjects200ApplicationJson getProjects200ApplicationJSONObject) {
        this.getProjects200ApplicationJSONObject = getProjects200ApplicationJSONObject;
        return this;
    }
}