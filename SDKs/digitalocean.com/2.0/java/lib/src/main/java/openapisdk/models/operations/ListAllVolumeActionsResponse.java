package openapisdk.models.operations;



public class ListAllVolumeActionsResponse {
    public String contentType;
    public ListAllVolumeActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllVolumeActionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllVolumeActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllVolumeActions200ApplicationJson listAllVolumeActions200ApplicationJSONObject;
    public ListAllVolumeActionsResponse withListAllVolumeActions200ApplicationJsonObject(ListAllVolumeActions200ApplicationJson listAllVolumeActions200ApplicationJSONObject) {
        this.listAllVolumeActions200ApplicationJSONObject = listAllVolumeActions200ApplicationJSONObject;
        return this;
    }
    public ListAllVolumeActions401ApplicationJson listAllVolumeActions401ApplicationJSONObject;
    public ListAllVolumeActionsResponse withListAllVolumeActions401ApplicationJsonObject(ListAllVolumeActions401ApplicationJson listAllVolumeActions401ApplicationJSONObject) {
        this.listAllVolumeActions401ApplicationJSONObject = listAllVolumeActions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllVolumeActionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}