package openapisdk.models.operations;



public class ListTiersResponse {
    public String contentType;
    public ListTiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListTiersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListTiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListTiers200ApplicationJson listTiers200ApplicationJSONObject;
    public ListTiersResponse withListTiers200ApplicationJsonObject(ListTiers200ApplicationJson listTiers200ApplicationJSONObject) {
        this.listTiers200ApplicationJSONObject = listTiers200ApplicationJSONObject;
        return this;
    }
    public ListTiers401ApplicationJson listTiers401ApplicationJSONObject;
    public ListTiersResponse withListTiers401ApplicationJsonObject(ListTiers401ApplicationJson listTiers401ApplicationJSONObject) {
        this.listTiers401ApplicationJSONObject = listTiers401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListTiersResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}