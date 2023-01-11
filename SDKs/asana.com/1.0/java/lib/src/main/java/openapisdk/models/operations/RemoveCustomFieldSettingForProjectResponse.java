package openapisdk.models.operations;



public class RemoveCustomFieldSettingForProjectResponse {
    public String contentType;
    public RemoveCustomFieldSettingForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveCustomFieldSettingForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveCustomFieldSettingForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveCustomFieldSettingForProject200ApplicationJson removeCustomFieldSettingForProject200ApplicationJSONObject;
    public RemoveCustomFieldSettingForProjectResponse withRemoveCustomFieldSettingForProject200ApplicationJsonObject(RemoveCustomFieldSettingForProject200ApplicationJson removeCustomFieldSettingForProject200ApplicationJSONObject) {
        this.removeCustomFieldSettingForProject200ApplicationJSONObject = removeCustomFieldSettingForProject200ApplicationJSONObject;
        return this;
    }
}