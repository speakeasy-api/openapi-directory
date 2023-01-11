package openapisdk.models.operations;



public class GetDomainRecordResponse {
    public String contentType;
    public GetDomainRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDomainRecordResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDomainRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getDomainRecord200ApplicationJSONAny;
    public GetDomainRecordResponse withGetDomainRecord200ApplicationJsonAny(Object getDomainRecord200ApplicationJSONAny) {
        this.getDomainRecord200ApplicationJSONAny = getDomainRecord200ApplicationJSONAny;
        return this;
    }
    public GetDomainRecord401ApplicationJson getDomainRecord401ApplicationJSONObject;
    public GetDomainRecordResponse withGetDomainRecord401ApplicationJsonObject(GetDomainRecord401ApplicationJson getDomainRecord401ApplicationJSONObject) {
        this.getDomainRecord401ApplicationJSONObject = getDomainRecord401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDomainRecordResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}