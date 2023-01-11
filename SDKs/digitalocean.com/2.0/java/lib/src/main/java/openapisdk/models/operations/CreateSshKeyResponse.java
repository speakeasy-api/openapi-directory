package openapisdk.models.operations;



public class CreateSshKeyResponse {
    public String contentType;
    public CreateSshKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateSshKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateSshKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createSshKey201ApplicationJSONAny;
    public CreateSshKeyResponse withCreateSshKey201ApplicationJsonAny(Object createSshKey201ApplicationJSONAny) {
        this.createSshKey201ApplicationJSONAny = createSshKey201ApplicationJSONAny;
        return this;
    }
    public CreateSshKey401ApplicationJson createSshKey401ApplicationJSONObject;
    public CreateSshKeyResponse withCreateSshKey401ApplicationJsonObject(CreateSshKey401ApplicationJson createSshKey401ApplicationJSONObject) {
        this.createSshKey401ApplicationJSONObject = createSshKey401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateSshKeyResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}