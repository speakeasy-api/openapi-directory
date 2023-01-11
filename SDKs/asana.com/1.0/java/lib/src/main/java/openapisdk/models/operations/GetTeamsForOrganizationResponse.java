package openapisdk.models.operations;



public class GetTeamsForOrganizationResponse {
    public String contentType;
    public GetTeamsForOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTeamsForOrganizationResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTeamsForOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeamsForOrganization200ApplicationJson getTeamsForOrganization200ApplicationJSONObject;
    public GetTeamsForOrganizationResponse withGetTeamsForOrganization200ApplicationJsonObject(GetTeamsForOrganization200ApplicationJson getTeamsForOrganization200ApplicationJSONObject) {
        this.getTeamsForOrganization200ApplicationJSONObject = getTeamsForOrganization200ApplicationJSONObject;
        return this;
    }
}