package openapisdk.models.operations;



public class UpdateCustomFieldResponse {
    public String contentType;
    public UpdateCustomFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateCustomFieldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateCustomFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateCustomField200ApplicationJson updateCustomField200ApplicationJSONObject;
    public UpdateCustomFieldResponse withUpdateCustomField200ApplicationJsonObject(UpdateCustomField200ApplicationJson updateCustomField200ApplicationJSONObject) {
        this.updateCustomField200ApplicationJSONObject = updateCustomField200ApplicationJSONObject;
        return this;
    }
}