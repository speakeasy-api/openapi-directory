package openapisdk.models.operations;



public class GetProjectMembershipsForProjectResponse {
    public String contentType;
    public GetProjectMembershipsForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectMembershipsForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectMembershipsForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectMembershipsForProject200ApplicationJson getProjectMembershipsForProject200ApplicationJSONObject;
    public GetProjectMembershipsForProjectResponse withGetProjectMembershipsForProject200ApplicationJsonObject(GetProjectMembershipsForProject200ApplicationJson getProjectMembershipsForProject200ApplicationJSONObject) {
        this.getProjectMembershipsForProject200ApplicationJSONObject = getProjectMembershipsForProject200ApplicationJSONObject;
        return this;
    }
}