package openapisdk.models.operations;



public class CreateCustomFieldResponse {
    public String contentType;
    public CreateCustomFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateCustomFieldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateCustomFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateCustomField201ApplicationJson createCustomField201ApplicationJSONObject;
    public CreateCustomFieldResponse withCreateCustomField201ApplicationJsonObject(CreateCustomField201ApplicationJson createCustomField201ApplicationJSONObject) {
        this.createCustomField201ApplicationJSONObject = createCustomField201ApplicationJSONObject;
        return this;
    }
}