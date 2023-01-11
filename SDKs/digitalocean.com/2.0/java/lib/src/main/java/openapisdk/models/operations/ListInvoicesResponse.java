package openapisdk.models.operations;



public class ListInvoicesResponse {
    public String contentType;
    public ListInvoicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListInvoicesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListInvoicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListInvoices200ApplicationJson listInvoices200ApplicationJSONObject;
    public ListInvoicesResponse withListInvoices200ApplicationJsonObject(ListInvoices200ApplicationJson listInvoices200ApplicationJSONObject) {
        this.listInvoices200ApplicationJSONObject = listInvoices200ApplicationJSONObject;
        return this;
    }
    public ListInvoices401ApplicationJson listInvoices401ApplicationJSONObject;
    public ListInvoicesResponse withListInvoices401ApplicationJsonObject(ListInvoices401ApplicationJson listInvoices401ApplicationJSONObject) {
        this.listInvoices401ApplicationJSONObject = listInvoices401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListInvoicesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}