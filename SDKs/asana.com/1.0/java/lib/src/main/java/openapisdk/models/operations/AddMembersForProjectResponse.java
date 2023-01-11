package openapisdk.models.operations;



public class AddMembersForProjectResponse {
    public String contentType;
    public AddMembersForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddMembersForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddMembersForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddMembersForProject200ApplicationJson addMembersForProject200ApplicationJSONObject;
    public AddMembersForProjectResponse withAddMembersForProject200ApplicationJsonObject(AddMembersForProject200ApplicationJson addMembersForProject200ApplicationJSONObject) {
        this.addMembersForProject200ApplicationJSONObject = addMembersForProject200ApplicationJSONObject;
        return this;
    }
}