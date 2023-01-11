package openapisdk.models.operations;



public class PatchUpdateDomainRecordResponse {
    public String contentType;
    public PatchUpdateDomainRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PatchUpdateDomainRecordResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PatchUpdateDomainRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object patchUpdateDomainRecord200ApplicationJSONAny;
    public PatchUpdateDomainRecordResponse withPatchUpdateDomainRecord200ApplicationJsonAny(Object patchUpdateDomainRecord200ApplicationJSONAny) {
        this.patchUpdateDomainRecord200ApplicationJSONAny = patchUpdateDomainRecord200ApplicationJSONAny;
        return this;
    }
    public PatchUpdateDomainRecord401ApplicationJson patchUpdateDomainRecord401ApplicationJSONObject;
    public PatchUpdateDomainRecordResponse withPatchUpdateDomainRecord401ApplicationJsonObject(PatchUpdateDomainRecord401ApplicationJson patchUpdateDomainRecord401ApplicationJSONObject) {
        this.patchUpdateDomainRecord401ApplicationJSONObject = patchUpdateDomainRecord401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PatchUpdateDomainRecordResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}