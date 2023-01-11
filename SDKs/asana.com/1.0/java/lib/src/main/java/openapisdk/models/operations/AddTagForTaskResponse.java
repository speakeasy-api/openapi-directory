package openapisdk.models.operations;



public class AddTagForTaskResponse {
    public String contentType;
    public AddTagForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddTagForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddTagForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddTagForTask200ApplicationJson addTagForTask200ApplicationJSONObject;
    public AddTagForTaskResponse withAddTagForTask200ApplicationJsonObject(AddTagForTask200ApplicationJson addTagForTask200ApplicationJSONObject) {
        this.addTagForTask200ApplicationJSONObject = addTagForTask200ApplicationJSONObject;
        return this;
    }
}