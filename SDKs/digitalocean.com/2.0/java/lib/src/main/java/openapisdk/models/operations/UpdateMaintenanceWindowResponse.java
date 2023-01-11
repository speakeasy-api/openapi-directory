package openapisdk.models.operations;



public class UpdateMaintenanceWindowResponse {
    public String contentType;
    public UpdateMaintenanceWindowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateMaintenanceWindowResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateMaintenanceWindowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateMaintenanceWindow401ApplicationJson updateMaintenanceWindow401ApplicationJSONObject;
    public UpdateMaintenanceWindowResponse withUpdateMaintenanceWindow401ApplicationJsonObject(UpdateMaintenanceWindow401ApplicationJson updateMaintenanceWindow401ApplicationJSONObject) {
        this.updateMaintenanceWindow401ApplicationJSONObject = updateMaintenanceWindow401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateMaintenanceWindowResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}