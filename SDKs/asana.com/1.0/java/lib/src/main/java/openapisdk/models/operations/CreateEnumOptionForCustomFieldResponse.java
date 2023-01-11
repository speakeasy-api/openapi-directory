package openapisdk.models.operations;



public class CreateEnumOptionForCustomFieldResponse {
    public String contentType;
    public CreateEnumOptionForCustomFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateEnumOptionForCustomFieldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateEnumOptionForCustomFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateEnumOptionForCustomField201ApplicationJson createEnumOptionForCustomField201ApplicationJSONObject;
    public CreateEnumOptionForCustomFieldResponse withCreateEnumOptionForCustomField201ApplicationJsonObject(CreateEnumOptionForCustomField201ApplicationJson createEnumOptionForCustomField201ApplicationJSONObject) {
        this.createEnumOptionForCustomField201ApplicationJSONObject = createEnumOptionForCustomField201ApplicationJSONObject;
        return this;
    }
}