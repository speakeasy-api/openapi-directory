package openapisdk.models.operations;



public class GetWorkspaceMembershipResponse {
    public String contentType;
    public GetWorkspaceMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetWorkspaceMembershipResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetWorkspaceMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWorkspaceMembership200ApplicationJson getWorkspaceMembership200ApplicationJSONObject;
    public GetWorkspaceMembershipResponse withGetWorkspaceMembership200ApplicationJsonObject(GetWorkspaceMembership200ApplicationJson getWorkspaceMembership200ApplicationJSONObject) {
        this.getWorkspaceMembership200ApplicationJSONObject = getWorkspaceMembership200ApplicationJSONObject;
        return this;
    }
}