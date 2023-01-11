package openapisdk.models.operations;



public class DeleteCustomFieldResponse {
    public String contentType;
    public DeleteCustomFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteCustomFieldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteCustomFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteCustomField200ApplicationJson deleteCustomField200ApplicationJSONObject;
    public DeleteCustomFieldResponse withDeleteCustomField200ApplicationJsonObject(DeleteCustomField200ApplicationJson deleteCustomField200ApplicationJSONObject) {
        this.deleteCustomField200ApplicationJSONObject = deleteCustomField200ApplicationJSONObject;
        return this;
    }
}