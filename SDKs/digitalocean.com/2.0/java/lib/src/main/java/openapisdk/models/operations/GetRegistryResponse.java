package openapisdk.models.operations;



public class GetRegistryResponse {
    public String contentType;
    public GetRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRegistryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getRegistry200ApplicationJSONAny;
    public GetRegistryResponse withGetRegistry200ApplicationJsonAny(Object getRegistry200ApplicationJSONAny) {
        this.getRegistry200ApplicationJSONAny = getRegistry200ApplicationJSONAny;
        return this;
    }
    public GetRegistry401ApplicationJson getRegistry401ApplicationJSONObject;
    public GetRegistryResponse withGetRegistry401ApplicationJsonObject(GetRegistry401ApplicationJson getRegistry401ApplicationJSONObject) {
        this.getRegistry401ApplicationJSONObject = getRegistry401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetRegistryResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}