package openapisdk.models.operations;



public class GetTeamMembershipsForTeamResponse {
    public String contentType;
    public GetTeamMembershipsForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTeamMembershipsForTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTeamMembershipsForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeamMembershipsForTeam200ApplicationJson getTeamMembershipsForTeam200ApplicationJSONObject;
    public GetTeamMembershipsForTeamResponse withGetTeamMembershipsForTeam200ApplicationJsonObject(GetTeamMembershipsForTeam200ApplicationJson getTeamMembershipsForTeam200ApplicationJSONObject) {
        this.getTeamMembershipsForTeam200ApplicationJSONObject = getTeamMembershipsForTeam200ApplicationJSONObject;
        return this;
    }
}