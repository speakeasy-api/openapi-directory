package openapisdk.models.operations;



public class CreateAppResponse {
    public String contentType;
    public CreateAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateAppResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateApp200ApplicationJson createApp200ApplicationJSONObject;
    public CreateAppResponse withCreateApp200ApplicationJsonObject(CreateApp200ApplicationJson createApp200ApplicationJSONObject) {
        this.createApp200ApplicationJSONObject = createApp200ApplicationJSONObject;
        return this;
    }
    public CreateApp401ApplicationJson createApp401ApplicationJSONObject;
    public CreateAppResponse withCreateApp401ApplicationJsonObject(CreateApp401ApplicationJson createApp401ApplicationJSONObject) {
        this.createApp401ApplicationJSONObject = createApp401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateAppResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}