package openapisdk.models.operations;



public class ListBillingHistoryResponse {
    public String contentType;
    public ListBillingHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListBillingHistoryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListBillingHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListBillingHistory200ApplicationJson listBillingHistory200ApplicationJSONObject;
    public ListBillingHistoryResponse withListBillingHistory200ApplicationJsonObject(ListBillingHistory200ApplicationJson listBillingHistory200ApplicationJSONObject) {
        this.listBillingHistory200ApplicationJSONObject = listBillingHistory200ApplicationJSONObject;
        return this;
    }
    public ListBillingHistory401ApplicationJson listBillingHistory401ApplicationJSONObject;
    public ListBillingHistoryResponse withListBillingHistory401ApplicationJsonObject(ListBillingHistory401ApplicationJson listBillingHistory401ApplicationJSONObject) {
        this.listBillingHistory401ApplicationJSONObject = listBillingHistory401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListBillingHistoryResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}