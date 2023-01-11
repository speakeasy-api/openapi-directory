package openapisdk.models.operations;



public class PatchProjectResponse {
    public String contentType;
    public PatchProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PatchProjectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PatchProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object patchProject200ApplicationJSONAny;
    public PatchProjectResponse withPatchProject200ApplicationJsonAny(Object patchProject200ApplicationJSONAny) {
        this.patchProject200ApplicationJSONAny = patchProject200ApplicationJSONAny;
        return this;
    }
    public PatchProject401ApplicationJson patchProject401ApplicationJSONObject;
    public PatchProjectResponse withPatchProject401ApplicationJsonObject(PatchProject401ApplicationJson patchProject401ApplicationJSONObject) {
        this.patchProject401ApplicationJSONObject = patchProject401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PatchProjectResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}