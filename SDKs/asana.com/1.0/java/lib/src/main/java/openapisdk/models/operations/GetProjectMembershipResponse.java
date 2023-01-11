package openapisdk.models.operations;



public class GetProjectMembershipResponse {
    public String contentType;
    public GetProjectMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectMembershipResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectMembership200ApplicationJson getProjectMembership200ApplicationJSONObject;
    public GetProjectMembershipResponse withGetProjectMembership200ApplicationJsonObject(GetProjectMembership200ApplicationJson getProjectMembership200ApplicationJSONObject) {
        this.getProjectMembership200ApplicationJSONObject = getProjectMembership200ApplicationJSONObject;
        return this;
    }
}