package openapisdk.models.operations;



public class GetTeamMembershipsForUserResponse {
    public String contentType;
    public GetTeamMembershipsForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTeamMembershipsForUserResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTeamMembershipsForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeamMembershipsForUser200ApplicationJson getTeamMembershipsForUser200ApplicationJSONObject;
    public GetTeamMembershipsForUserResponse withGetTeamMembershipsForUser200ApplicationJsonObject(GetTeamMembershipsForUser200ApplicationJson getTeamMembershipsForUser200ApplicationJSONObject) {
        this.getTeamMembershipsForUser200ApplicationJSONObject = getTeamMembershipsForUser200ApplicationJSONObject;
        return this;
    }
}