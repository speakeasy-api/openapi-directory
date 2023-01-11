package openapisdk.models.operations;



public class GetCustomFieldSettingsForProjectResponse {
    public String contentType;
    public GetCustomFieldSettingsForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetCustomFieldSettingsForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetCustomFieldSettingsForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomFieldSettingsForProject200ApplicationJson getCustomFieldSettingsForProject200ApplicationJSONObject;
    public GetCustomFieldSettingsForProjectResponse withGetCustomFieldSettingsForProject200ApplicationJsonObject(GetCustomFieldSettingsForProject200ApplicationJson getCustomFieldSettingsForProject200ApplicationJSONObject) {
        this.getCustomFieldSettingsForProject200ApplicationJSONObject = getCustomFieldSettingsForProject200ApplicationJSONObject;
        return this;
    }
}