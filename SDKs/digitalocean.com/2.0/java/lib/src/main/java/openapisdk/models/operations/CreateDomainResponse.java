package openapisdk.models.operations;



public class CreateDomainResponse {
    public String contentType;
    public CreateDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDomainResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createDomain201ApplicationJSONAny;
    public CreateDomainResponse withCreateDomain201ApplicationJsonAny(Object createDomain201ApplicationJSONAny) {
        this.createDomain201ApplicationJSONAny = createDomain201ApplicationJSONAny;
        return this;
    }
    public CreateDomain401ApplicationJson createDomain401ApplicationJSONObject;
    public CreateDomainResponse withCreateDomain401ApplicationJsonObject(CreateDomain401ApplicationJson createDomain401ApplicationJSONObject) {
        this.createDomain401ApplicationJSONObject = createDomain401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateDomainResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}