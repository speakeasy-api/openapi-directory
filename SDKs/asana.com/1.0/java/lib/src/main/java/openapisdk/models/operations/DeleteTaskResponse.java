package openapisdk.models.operations;



public class DeleteTaskResponse {
    public String contentType;
    public DeleteTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteTask200ApplicationJson deleteTask200ApplicationJSONObject;
    public DeleteTaskResponse withDeleteTask200ApplicationJsonObject(DeleteTask200ApplicationJson deleteTask200ApplicationJSONObject) {
        this.deleteTask200ApplicationJSONObject = deleteTask200ApplicationJSONObject;
        return this;
    }
}