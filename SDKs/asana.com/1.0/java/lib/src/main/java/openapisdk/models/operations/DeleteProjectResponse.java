package openapisdk.models.operations;



public class DeleteProjectResponse {
    public String contentType;
    public DeleteProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteProject200ApplicationJson deleteProject200ApplicationJSONObject;
    public DeleteProjectResponse withDeleteProject200ApplicationJsonObject(DeleteProject200ApplicationJson deleteProject200ApplicationJSONObject) {
        this.deleteProject200ApplicationJSONObject = deleteProject200ApplicationJSONObject;
        return this;
    }
}