package openapisdk.models.operations;



public class CreateRegistryResponse {
    public String contentType;
    public CreateRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateRegistryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createRegistry201ApplicationJSONAny;
    public CreateRegistryResponse withCreateRegistry201ApplicationJsonAny(Object createRegistry201ApplicationJSONAny) {
        this.createRegistry201ApplicationJSONAny = createRegistry201ApplicationJSONAny;
        return this;
    }
    public CreateRegistry401ApplicationJson createRegistry401ApplicationJSONObject;
    public CreateRegistryResponse withCreateRegistry401ApplicationJsonObject(CreateRegistry401ApplicationJson createRegistry401ApplicationJSONObject) {
        this.createRegistry401ApplicationJSONObject = createRegistry401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateRegistryResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}