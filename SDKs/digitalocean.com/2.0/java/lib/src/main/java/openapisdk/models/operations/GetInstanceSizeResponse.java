package openapisdk.models.operations;



public class GetInstanceSizeResponse {
    public String contentType;
    public GetInstanceSizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInstanceSizeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInstanceSizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetInstanceSize200ApplicationJson getInstanceSize200ApplicationJSONObject;
    public GetInstanceSizeResponse withGetInstanceSize200ApplicationJsonObject(GetInstanceSize200ApplicationJson getInstanceSize200ApplicationJSONObject) {
        this.getInstanceSize200ApplicationJSONObject = getInstanceSize200ApplicationJSONObject;
        return this;
    }
    public GetInstanceSize401ApplicationJson getInstanceSize401ApplicationJSONObject;
    public GetInstanceSizeResponse withGetInstanceSize401ApplicationJsonObject(GetInstanceSize401ApplicationJson getInstanceSize401ApplicationJSONObject) {
        this.getInstanceSize401ApplicationJSONObject = getInstanceSize401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetInstanceSizeResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}