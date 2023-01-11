package openapisdk.models.operations;



public class CreateCustomImageResponse {
    public String contentType;
    public CreateCustomImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateCustomImageResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateCustomImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createCustomImage202ApplicationJSONAny;
    public CreateCustomImageResponse withCreateCustomImage202ApplicationJsonAny(Object createCustomImage202ApplicationJSONAny) {
        this.createCustomImage202ApplicationJSONAny = createCustomImage202ApplicationJSONAny;
        return this;
    }
    public CreateCustomImage401ApplicationJson createCustomImage401ApplicationJSONObject;
    public CreateCustomImageResponse withCreateCustomImage401ApplicationJsonObject(CreateCustomImage401ApplicationJson createCustomImage401ApplicationJSONObject) {
        this.createCustomImage401ApplicationJSONObject = createCustomImage401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateCustomImageResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}