package openapisdk.models.operations;



public class DeleteProjectStatusResponse {
    public String contentType;
    public DeleteProjectStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteProjectStatusResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteProjectStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteProjectStatus200ApplicationJson deleteProjectStatus200ApplicationJSONObject;
    public DeleteProjectStatusResponse withDeleteProjectStatus200ApplicationJsonObject(DeleteProjectStatus200ApplicationJson deleteProjectStatus200ApplicationJSONObject) {
        this.deleteProjectStatus200ApplicationJSONObject = deleteProjectStatus200ApplicationJSONObject;
        return this;
    }
}