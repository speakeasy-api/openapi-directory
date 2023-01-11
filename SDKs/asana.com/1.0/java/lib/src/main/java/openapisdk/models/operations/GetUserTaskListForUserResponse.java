package openapisdk.models.operations;



public class GetUserTaskListForUserResponse {
    public String contentType;
    public GetUserTaskListForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetUserTaskListForUserResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetUserTaskListForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserTaskListForUser200ApplicationJson getUserTaskListForUser200ApplicationJSONObject;
    public GetUserTaskListForUserResponse withGetUserTaskListForUser200ApplicationJsonObject(GetUserTaskListForUser200ApplicationJson getUserTaskListForUser200ApplicationJSONObject) {
        this.getUserTaskListForUser200ApplicationJSONObject = getUserTaskListForUser200ApplicationJSONObject;
        return this;
    }
}