package openapisdk.models.operations;



public class CreateDomainRecordResponse {
    public String contentType;
    public CreateDomainRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDomainRecordResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateDomainRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createDomainRecord201ApplicationJSONAny;
    public CreateDomainRecordResponse withCreateDomainRecord201ApplicationJsonAny(Object createDomainRecord201ApplicationJSONAny) {
        this.createDomainRecord201ApplicationJSONAny = createDomainRecord201ApplicationJSONAny;
        return this;
    }
    public CreateDomainRecord401ApplicationJson createDomainRecord401ApplicationJSONObject;
    public CreateDomainRecordResponse withCreateDomainRecord401ApplicationJsonObject(CreateDomainRecord401ApplicationJson createDomainRecord401ApplicationJSONObject) {
        this.createDomainRecord401ApplicationJSONObject = createDomainRecord401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateDomainRecordResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}