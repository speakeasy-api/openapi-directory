package openapisdk.models.operations;



public class InsertEnumOptionForCustomFieldResponse {
    public String contentType;
    public InsertEnumOptionForCustomFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public InsertEnumOptionForCustomFieldResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public InsertEnumOptionForCustomFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public InsertEnumOptionForCustomField200ApplicationJson insertEnumOptionForCustomField200ApplicationJSONObject;
    public InsertEnumOptionForCustomFieldResponse withInsertEnumOptionForCustomField200ApplicationJsonObject(InsertEnumOptionForCustomField200ApplicationJson insertEnumOptionForCustomField200ApplicationJSONObject) {
        this.insertEnumOptionForCustomField200ApplicationJSONObject = insertEnumOptionForCustomField200ApplicationJSONObject;
        return this;
    }
}