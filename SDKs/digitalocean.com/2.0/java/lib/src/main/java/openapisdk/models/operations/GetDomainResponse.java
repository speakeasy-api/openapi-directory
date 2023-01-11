package openapisdk.models.operations;



public class GetDomainResponse {
    public String contentType;
    public GetDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomainResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getDomain200ApplicationJSONAny;
    public GetDomainResponse withGetDomain200ApplicationJsonAny(Object getDomain200ApplicationJSONAny) {
        this.getDomain200ApplicationJSONAny = getDomain200ApplicationJSONAny;
        return this;
    }
    public GetDomain401ApplicationJson getDomain401ApplicationJSONObject;
    public GetDomainResponse withGetDomain401ApplicationJsonObject(GetDomain401ApplicationJson getDomain401ApplicationJSONObject) {
        this.getDomain401ApplicationJSONObject = getDomain401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDomainResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}