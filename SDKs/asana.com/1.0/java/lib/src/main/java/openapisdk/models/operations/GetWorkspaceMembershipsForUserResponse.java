package openapisdk.models.operations;



public class GetWorkspaceMembershipsForUserResponse {
    public String contentType;
    public GetWorkspaceMembershipsForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetWorkspaceMembershipsForUserResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetWorkspaceMembershipsForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWorkspaceMembershipsForUser200ApplicationJson getWorkspaceMembershipsForUser200ApplicationJSONObject;
    public GetWorkspaceMembershipsForUserResponse withGetWorkspaceMembershipsForUser200ApplicationJsonObject(GetWorkspaceMembershipsForUser200ApplicationJson getWorkspaceMembershipsForUser200ApplicationJSONObject) {
        this.getWorkspaceMembershipsForUser200ApplicationJSONObject = getWorkspaceMembershipsForUser200ApplicationJSONObject;
        return this;
    }
}