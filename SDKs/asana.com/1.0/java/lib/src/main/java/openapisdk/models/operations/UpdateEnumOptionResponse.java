package openapisdk.models.operations;



public class UpdateEnumOptionResponse {
    public String contentType;
    public UpdateEnumOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateEnumOptionResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateEnumOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateEnumOption200ApplicationJson updateEnumOption200ApplicationJSONObject;
    public UpdateEnumOptionResponse withUpdateEnumOption200ApplicationJsonObject(UpdateEnumOption200ApplicationJson updateEnumOption200ApplicationJSONObject) {
        this.updateEnumOption200ApplicationJSONObject = updateEnumOption200ApplicationJSONObject;
        return this;
    }
}