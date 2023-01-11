package openapisdk.models.operations;



public class ListAllDomainsResponseOutput {
    public String contentType;
    public ListAllDomainsResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllDomainsResponseOutput withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllDomainsResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllDomains200ApplicationJsonOutput listAllDomains200ApplicationJSONObject;
    public ListAllDomainsResponseOutput withListAllDomains200ApplicationJsonObject(ListAllDomains200ApplicationJsonOutput listAllDomains200ApplicationJSONObject) {
        this.listAllDomains200ApplicationJSONObject = listAllDomains200ApplicationJSONObject;
        return this;
    }
    public ListAllDomains401ApplicationJson listAllDomains401ApplicationJSONObject;
    public ListAllDomainsResponseOutput withListAllDomains401ApplicationJsonObject(ListAllDomains401ApplicationJson listAllDomains401ApplicationJSONObject) {
        this.listAllDomains401ApplicationJSONObject = listAllDomains401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllDomainsResponseOutput withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}