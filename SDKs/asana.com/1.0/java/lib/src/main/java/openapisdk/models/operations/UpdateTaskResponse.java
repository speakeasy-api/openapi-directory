package openapisdk.models.operations;



public class UpdateTaskResponse {
    public String contentType;
    public UpdateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateTask200ApplicationJson updateTask200ApplicationJSONObject;
    public UpdateTaskResponse withUpdateTask200ApplicationJsonObject(UpdateTask200ApplicationJson updateTask200ApplicationJSONObject) {
        this.updateTask200ApplicationJSONObject = updateTask200ApplicationJSONObject;
        return this;
    }
}