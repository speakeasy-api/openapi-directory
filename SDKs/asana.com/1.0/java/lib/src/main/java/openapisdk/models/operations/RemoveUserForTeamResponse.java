package openapisdk.models.operations;



public class RemoveUserForTeamResponse {
    public String contentType;
    public RemoveUserForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveUserForTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveUserForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveUserForTeam204ApplicationJson removeUserForTeam204ApplicationJSONObject;
    public RemoveUserForTeamResponse withRemoveUserForTeam204ApplicationJsonObject(RemoveUserForTeam204ApplicationJson removeUserForTeam204ApplicationJSONObject) {
        this.removeUserForTeam204ApplicationJSONObject = removeUserForTeam204ApplicationJSONObject;
        return this;
    }
}