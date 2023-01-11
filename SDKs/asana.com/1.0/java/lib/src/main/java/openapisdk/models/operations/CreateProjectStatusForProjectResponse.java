package openapisdk.models.operations;



public class CreateProjectStatusForProjectResponse {
    public String contentType;
    public CreateProjectStatusForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateProjectStatusForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateProjectStatusForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateProjectStatusForProject201ApplicationJson createProjectStatusForProject201ApplicationJSONObject;
    public CreateProjectStatusForProjectResponse withCreateProjectStatusForProject201ApplicationJsonObject(CreateProjectStatusForProject201ApplicationJson createProjectStatusForProject201ApplicationJSONObject) {
        this.createProjectStatusForProject201ApplicationJSONObject = createProjectStatusForProject201ApplicationJSONObject;
        return this;
    }
}