package openapisdk.models.operations;



public class RemoveSubgoalResponse {
    public String contentType;
    public RemoveSubgoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveSubgoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveSubgoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveSubgoal200ApplicationJson removeSubgoal200ApplicationJSONObject;
    public RemoveSubgoalResponse withRemoveSubgoal200ApplicationJsonObject(RemoveSubgoal200ApplicationJson removeSubgoal200ApplicationJSONObject) {
        this.removeSubgoal200ApplicationJSONObject = removeSubgoal200ApplicationJSONObject;
        return this;
    }
}