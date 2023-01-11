package openapisdk.models.operations;



public class AddProjectForTaskResponse {
    public String contentType;
    public AddProjectForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddProjectForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddProjectForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddProjectForTask200ApplicationJson addProjectForTask200ApplicationJSONObject;
    public AddProjectForTaskResponse withAddProjectForTask200ApplicationJsonObject(AddProjectForTask200ApplicationJson addProjectForTask200ApplicationJSONObject) {
        this.addProjectForTask200ApplicationJSONObject = addProjectForTask200ApplicationJSONObject;
        return this;
    }
}