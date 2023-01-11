package openapisdk.models.operations;



public class GetRegistryOptionsResponse {
    public String contentType;
    public GetRegistryOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRegistryOptionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRegistryOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRegistryOptions200ApplicationJson getRegistryOptions200ApplicationJSONObject;
    public GetRegistryOptionsResponse withGetRegistryOptions200ApplicationJsonObject(GetRegistryOptions200ApplicationJson getRegistryOptions200ApplicationJSONObject) {
        this.getRegistryOptions200ApplicationJSONObject = getRegistryOptions200ApplicationJSONObject;
        return this;
    }
    public GetRegistryOptions401ApplicationJson getRegistryOptions401ApplicationJSONObject;
    public GetRegistryOptionsResponse withGetRegistryOptions401ApplicationJsonObject(GetRegistryOptions401ApplicationJson getRegistryOptions401ApplicationJSONObject) {
        this.getRegistryOptions401ApplicationJSONObject = getRegistryOptions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetRegistryOptionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}