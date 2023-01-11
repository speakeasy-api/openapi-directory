package openapisdk.models.operations;



public class GetProjectsForTaskResponse {
    public String contentType;
    public GetProjectsForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectsForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectsForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectsForTask200ApplicationJson getProjectsForTask200ApplicationJSONObject;
    public GetProjectsForTaskResponse withGetProjectsForTask200ApplicationJsonObject(GetProjectsForTask200ApplicationJson getProjectsForTask200ApplicationJSONObject) {
        this.getProjectsForTask200ApplicationJSONObject = getProjectsForTask200ApplicationJSONObject;
        return this;
    }
}