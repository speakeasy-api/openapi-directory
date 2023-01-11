package openapisdk.models.operations;



public class CreateProjectForTeamResponse {
    public String contentType;
    public CreateProjectForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateProjectForTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateProjectForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateProjectForTeam201ApplicationJson createProjectForTeam201ApplicationJSONObject;
    public CreateProjectForTeamResponse withCreateProjectForTeam201ApplicationJsonObject(CreateProjectForTeam201ApplicationJson createProjectForTeam201ApplicationJSONObject) {
        this.createProjectForTeam201ApplicationJSONObject = createProjectForTeam201ApplicationJSONObject;
        return this;
    }
}