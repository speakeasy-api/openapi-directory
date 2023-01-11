package openapisdk.models.operations;



public class UpdateProjectResponse {
    public String contentType;
    public UpdateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateProject200ApplicationJson updateProject200ApplicationJSONObject;
    public UpdateProjectResponse withUpdateProject200ApplicationJsonObject(UpdateProject200ApplicationJson updateProject200ApplicationJSONObject) {
        this.updateProject200ApplicationJSONObject = updateProject200ApplicationJSONObject;
        return this;
    }
}