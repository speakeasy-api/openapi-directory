package openapisdk.models.operations;



public class ListAlertPoliciesResponse {
    public String contentType;
    public ListAlertPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAlertPoliciesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAlertPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAlertPolicies200ApplicationJson listAlertPolicies200ApplicationJSONObject;
    public ListAlertPoliciesResponse withListAlertPolicies200ApplicationJsonObject(ListAlertPolicies200ApplicationJson listAlertPolicies200ApplicationJSONObject) {
        this.listAlertPolicies200ApplicationJSONObject = listAlertPolicies200ApplicationJSONObject;
        return this;
    }
    public ListAlertPolicies401ApplicationJson listAlertPolicies401ApplicationJSONObject;
    public ListAlertPoliciesResponse withListAlertPolicies401ApplicationJsonObject(ListAlertPolicies401ApplicationJson listAlertPolicies401ApplicationJSONObject) {
        this.listAlertPolicies401ApplicationJSONObject = listAlertPolicies401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAlertPoliciesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}