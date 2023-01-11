package openapisdk.models.operations;



public class GetSshKeyResponse {
    public String contentType;
    public GetSshKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSshKeyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSshKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getSshKey200ApplicationJSONAny;
    public GetSshKeyResponse withGetSshKey200ApplicationJsonAny(Object getSshKey200ApplicationJSONAny) {
        this.getSshKey200ApplicationJSONAny = getSshKey200ApplicationJSONAny;
        return this;
    }
    public GetSshKey401ApplicationJson getSshKey401ApplicationJSONObject;
    public GetSshKeyResponse withGetSshKey401ApplicationJsonObject(GetSshKey401ApplicationJson getSshKey401ApplicationJSONObject) {
        this.getSshKey401ApplicationJSONObject = getSshKey401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetSshKeyResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}