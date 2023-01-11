package openapisdk.models.operations;



public class AddUserForTeamResponse {
    public String contentType;
    public AddUserForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddUserForTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddUserForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddUserForTeam200ApplicationJson addUserForTeam200ApplicationJSONObject;
    public AddUserForTeamResponse withAddUserForTeam200ApplicationJsonObject(AddUserForTeam200ApplicationJson addUserForTeam200ApplicationJSONObject) {
        this.addUserForTeam200ApplicationJSONObject = addUserForTeam200ApplicationJSONObject;
        return this;
    }
}