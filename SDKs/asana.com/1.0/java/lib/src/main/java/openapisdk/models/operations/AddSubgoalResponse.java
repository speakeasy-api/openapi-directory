package openapisdk.models.operations;



public class AddSubgoalResponse {
    public String contentType;
    public AddSubgoalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddSubgoalResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddSubgoalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddSubgoal200ApplicationJson addSubgoal200ApplicationJSONObject;
    public AddSubgoalResponse withAddSubgoal200ApplicationJsonObject(AddSubgoal200ApplicationJson addSubgoal200ApplicationJSONObject) {
        this.addSubgoal200ApplicationJSONObject = addSubgoal200ApplicationJSONObject;
        return this;
    }
}