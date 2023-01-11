package openapisdk.models.operations;



public class CreateTeamResponse {
    public String contentType;
    public CreateTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateTeam201ApplicationJson createTeam201ApplicationJSONObject;
    public CreateTeamResponse withCreateTeam201ApplicationJsonObject(CreateTeam201ApplicationJson createTeam201ApplicationJSONObject) {
        this.createTeam201ApplicationJSONObject = createTeam201ApplicationJSONObject;
        return this;
    }
}