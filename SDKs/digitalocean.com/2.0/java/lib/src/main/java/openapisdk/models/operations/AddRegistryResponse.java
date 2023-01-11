package openapisdk.models.operations;



public class AddRegistryResponse {
    public String contentType;
    public AddRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddRegistryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddRegistry401ApplicationJson addRegistry401ApplicationJSONObject;
    public AddRegistryResponse withAddRegistry401ApplicationJsonObject(AddRegistry401ApplicationJson addRegistry401ApplicationJSONObject) {
        this.addRegistry401ApplicationJSONObject = addRegistry401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddRegistryResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}