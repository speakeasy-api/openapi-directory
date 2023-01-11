package openapisdk.models.operations;



public class GetTeamMembershipsResponse {
    public String contentType;
    public GetTeamMembershipsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTeamMembershipsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTeamMembershipsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeamMemberships200ApplicationJson getTeamMemberships200ApplicationJSONObject;
    public GetTeamMembershipsResponse withGetTeamMemberships200ApplicationJsonObject(GetTeamMemberships200ApplicationJson getTeamMemberships200ApplicationJSONObject) {
        this.getTeamMemberships200ApplicationJSONObject = getTeamMemberships200ApplicationJSONObject;
        return this;
    }
}