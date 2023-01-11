package openapisdk.models.operations;



public class ListAllDomainRecordsResponse {
    public String contentType;
    public ListAllDomainRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllDomainRecordsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllDomainRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllDomainRecords200ApplicationJson listAllDomainRecords200ApplicationJSONObject;
    public ListAllDomainRecordsResponse withListAllDomainRecords200ApplicationJsonObject(ListAllDomainRecords200ApplicationJson listAllDomainRecords200ApplicationJSONObject) {
        this.listAllDomainRecords200ApplicationJSONObject = listAllDomainRecords200ApplicationJSONObject;
        return this;
    }
    public ListAllDomainRecords401ApplicationJson listAllDomainRecords401ApplicationJSONObject;
    public ListAllDomainRecordsResponse withListAllDomainRecords401ApplicationJsonObject(ListAllDomainRecords401ApplicationJson listAllDomainRecords401ApplicationJSONObject) {
        this.listAllDomainRecords401ApplicationJSONObject = listAllDomainRecords401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllDomainRecordsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}