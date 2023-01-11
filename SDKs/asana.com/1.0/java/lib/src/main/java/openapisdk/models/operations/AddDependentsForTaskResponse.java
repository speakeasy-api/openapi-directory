package openapisdk.models.operations;



public class AddDependentsForTaskResponse {
    public String contentType;
    public AddDependentsForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddDependentsForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddDependentsForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddDependentsForTask200ApplicationJson addDependentsForTask200ApplicationJSONObject;
    public AddDependentsForTaskResponse withAddDependentsForTask200ApplicationJsonObject(AddDependentsForTask200ApplicationJson addDependentsForTask200ApplicationJSONObject) {
        this.addDependentsForTask200ApplicationJSONObject = addDependentsForTask200ApplicationJSONObject;
        return this;
    }
}