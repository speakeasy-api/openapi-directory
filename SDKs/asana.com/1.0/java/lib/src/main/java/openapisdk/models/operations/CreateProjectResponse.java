package openapisdk.models.operations;



public class CreateProjectResponse {
    public String contentType;
    public CreateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateProject201ApplicationJson createProject201ApplicationJSONObject;
    public CreateProjectResponse withCreateProject201ApplicationJsonObject(CreateProject201ApplicationJson createProject201ApplicationJSONObject) {
        this.createProject201ApplicationJSONObject = createProject201ApplicationJSONObject;
        return this;
    }
}