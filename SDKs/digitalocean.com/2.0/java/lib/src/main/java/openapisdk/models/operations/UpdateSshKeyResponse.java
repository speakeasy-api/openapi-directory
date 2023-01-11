package openapisdk.models.operations;



public class UpdateSshKeyResponse {
    public String contentType;
    public UpdateSshKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateSshKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateSshKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateSshKey200ApplicationJSONAny;
    public UpdateSshKeyResponse withUpdateSshKey200ApplicationJsonAny(Object updateSshKey200ApplicationJSONAny) {
        this.updateSshKey200ApplicationJSONAny = updateSshKey200ApplicationJSONAny;
        return this;
    }
    public UpdateSshKey401ApplicationJson updateSshKey401ApplicationJSONObject;
    public UpdateSshKeyResponse withUpdateSshKey401ApplicationJsonObject(UpdateSshKey401ApplicationJson updateSshKey401ApplicationJSONObject) {
        this.updateSshKey401ApplicationJSONObject = updateSshKey401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateSshKeyResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}