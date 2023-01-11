package openapisdk.models.operations;



public class ListAllVolumesResponse {
    public String contentType;
    public ListAllVolumesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllVolumesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllVolumesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllVolumes200ApplicationJson listAllVolumes200ApplicationJSONObject;
    public ListAllVolumesResponse withListAllVolumes200ApplicationJsonObject(ListAllVolumes200ApplicationJson listAllVolumes200ApplicationJSONObject) {
        this.listAllVolumes200ApplicationJSONObject = listAllVolumes200ApplicationJSONObject;
        return this;
    }
    public ListAllVolumes401ApplicationJson listAllVolumes401ApplicationJSONObject;
    public ListAllVolumesResponse withListAllVolumes401ApplicationJsonObject(ListAllVolumes401ApplicationJson listAllVolumes401ApplicationJSONObject) {
        this.listAllVolumes401ApplicationJSONObject = listAllVolumes401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllVolumesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}