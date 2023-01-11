package openapisdk.models.operations;



public class GetFloatingIpActionResponse {
    public String contentType;
    public GetFloatingIpActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFloatingIpActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetFloatingIpActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getFloatingIpAction200ApplicationJSONAny;
    public GetFloatingIpActionResponse withGetFloatingIpAction200ApplicationJsonAny(Object getFloatingIpAction200ApplicationJSONAny) {
        this.getFloatingIpAction200ApplicationJSONAny = getFloatingIpAction200ApplicationJSONAny;
        return this;
    }
    public GetFloatingIpAction401ApplicationJson getFloatingIpAction401ApplicationJSONObject;
    public GetFloatingIpActionResponse withGetFloatingIpAction401ApplicationJsonObject(GetFloatingIpAction401ApplicationJson getFloatingIpAction401ApplicationJSONObject) {
        this.getFloatingIpAction401ApplicationJSONObject = getFloatingIpAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetFloatingIpActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}