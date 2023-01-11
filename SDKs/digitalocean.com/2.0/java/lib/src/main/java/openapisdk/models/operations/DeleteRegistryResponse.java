package openapisdk.models.operations;



public class DeleteRegistryResponse {
    public String contentType;
    public DeleteRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteRegistryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteRegistry401ApplicationJson deleteRegistry401ApplicationJSONObject;
    public DeleteRegistryResponse withDeleteRegistry401ApplicationJsonObject(DeleteRegistry401ApplicationJson deleteRegistry401ApplicationJSONObject) {
        this.deleteRegistry401ApplicationJSONObject = deleteRegistry401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteRegistryResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}