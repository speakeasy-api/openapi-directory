package openapisdk.models.operations;



public class PatchDefaultProjectResponse {
    public String contentType;
    public PatchDefaultProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PatchDefaultProjectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PatchDefaultProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object patchDefaultProject200ApplicationJSONAny;
    public PatchDefaultProjectResponse withPatchDefaultProject200ApplicationJsonAny(Object patchDefaultProject200ApplicationJSONAny) {
        this.patchDefaultProject200ApplicationJSONAny = patchDefaultProject200ApplicationJSONAny;
        return this;
    }
    public PatchDefaultProject401ApplicationJson patchDefaultProject401ApplicationJSONObject;
    public PatchDefaultProjectResponse withPatchDefaultProject401ApplicationJsonObject(PatchDefaultProject401ApplicationJson patchDefaultProject401ApplicationJSONObject) {
        this.patchDefaultProject401ApplicationJSONObject = patchDefaultProject401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PatchDefaultProjectResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}