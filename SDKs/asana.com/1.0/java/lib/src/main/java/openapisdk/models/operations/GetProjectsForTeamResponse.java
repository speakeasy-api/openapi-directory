package openapisdk.models.operations;



public class GetProjectsForTeamResponse {
    public String contentType;
    public GetProjectsForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectsForTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectsForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectsForTeam200ApplicationJson getProjectsForTeam200ApplicationJSONObject;
    public GetProjectsForTeamResponse withGetProjectsForTeam200ApplicationJsonObject(GetProjectsForTeam200ApplicationJson getProjectsForTeam200ApplicationJSONObject) {
        this.getProjectsForTeam200ApplicationJSONObject = getProjectsForTeam200ApplicationJSONObject;
        return this;
    }
}