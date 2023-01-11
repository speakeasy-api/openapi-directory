package openapisdk.models.operations;



public class GetTeamsForUserResponse {
    public String contentType;
    public GetTeamsForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTeamsForUserResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTeamsForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTeamsForUser200ApplicationJson getTeamsForUser200ApplicationJSONObject;
    public GetTeamsForUserResponse withGetTeamsForUser200ApplicationJsonObject(GetTeamsForUser200ApplicationJson getTeamsForUser200ApplicationJSONObject) {
        this.getTeamsForUser200ApplicationJSONObject = getTeamsForUser200ApplicationJSONObject;
        return this;
    }
}