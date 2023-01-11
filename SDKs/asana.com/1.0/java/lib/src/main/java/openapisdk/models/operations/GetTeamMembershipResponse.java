package openapisdk.models.operations;



public class GetTeamMembershipResponse {
    public String contentType;
    public GetTeamMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTeamMembershipResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTeamMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeamMembership200ApplicationJson getTeamMembership200ApplicationJSONObject;
    public GetTeamMembershipResponse withGetTeamMembership200ApplicationJsonObject(GetTeamMembership200ApplicationJson getTeamMembership200ApplicationJSONObject) {
        this.getTeamMembership200ApplicationJSONObject = getTeamMembership200ApplicationJSONObject;
        return this;
    }
}