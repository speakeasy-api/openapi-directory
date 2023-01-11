package openapisdk.models.operations;



public class GetUsersForTeamResponse {
    public String contentType;
    public GetUsersForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetUsersForTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetUsersForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUsersForTeam200ApplicationJson getUsersForTeam200ApplicationJSONObject;
    public GetUsersForTeamResponse withGetUsersForTeam200ApplicationJsonObject(GetUsersForTeam200ApplicationJson getUsersForTeam200ApplicationJSONObject) {
        this.getUsersForTeam200ApplicationJSONObject = getUsersForTeam200ApplicationJSONObject;
        return this;
    }
}