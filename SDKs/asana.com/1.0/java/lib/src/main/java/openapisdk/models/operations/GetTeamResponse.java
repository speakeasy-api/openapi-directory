package openapisdk.models.operations;



public class GetTeamResponse {
    public String contentType;
    public GetTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTeamResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeam200ApplicationJson getTeam200ApplicationJSONObject;
    public GetTeamResponse withGetTeam200ApplicationJsonObject(GetTeam200ApplicationJson getTeam200ApplicationJSONObject) {
        this.getTeam200ApplicationJSONObject = getTeam200ApplicationJSONObject;
        return this;
    }
}