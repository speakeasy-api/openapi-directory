package openapisdk.models.operations;



public class AddCustomFieldSettingForProjectResponse {
    public String contentType;
    public AddCustomFieldSettingForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddCustomFieldSettingForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddCustomFieldSettingForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddCustomFieldSettingForProject200ApplicationJson addCustomFieldSettingForProject200ApplicationJSONObject;
    public AddCustomFieldSettingForProjectResponse withAddCustomFieldSettingForProject200ApplicationJsonObject(AddCustomFieldSettingForProject200ApplicationJson addCustomFieldSettingForProject200ApplicationJSONObject) {
        this.addCustomFieldSettingForProject200ApplicationJSONObject = addCustomFieldSettingForProject200ApplicationJSONObject;
        return this;
    }
}