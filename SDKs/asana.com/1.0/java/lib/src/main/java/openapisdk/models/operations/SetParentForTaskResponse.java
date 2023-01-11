package openapisdk.models.operations;



public class SetParentForTaskResponse {
    public String contentType;
    public SetParentForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public SetParentForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public SetParentForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SetParentForTask200ApplicationJson setParentForTask200ApplicationJSONObject;
    public SetParentForTaskResponse withSetParentForTask200ApplicationJsonObject(SetParentForTask200ApplicationJson setParentForTask200ApplicationJSONObject) {
        this.setParentForTask200ApplicationJSONObject = setParentForTask200ApplicationJSONObject;
        return this;
    }
}