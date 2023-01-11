package openapisdk.models.operations;



public class UpdateDomainRecordResponse {
    public String contentType;
    public UpdateDomainRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateDomainRecordResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateDomainRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateDomainRecord200ApplicationJSONAny;
    public UpdateDomainRecordResponse withUpdateDomainRecord200ApplicationJsonAny(Object updateDomainRecord200ApplicationJSONAny) {
        this.updateDomainRecord200ApplicationJSONAny = updateDomainRecord200ApplicationJSONAny;
        return this;
    }
    public UpdateDomainRecord401ApplicationJson updateDomainRecord401ApplicationJSONObject;
    public UpdateDomainRecordResponse withUpdateDomainRecord401ApplicationJsonObject(UpdateDomainRecord401ApplicationJson updateDomainRecord401ApplicationJSONObject) {
        this.updateDomainRecord401ApplicationJSONObject = updateDomainRecord401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateDomainRecordResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}