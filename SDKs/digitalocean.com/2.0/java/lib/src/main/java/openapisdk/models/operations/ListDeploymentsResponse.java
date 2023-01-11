package openapisdk.models.operations;



public class ListDeploymentsResponse {
    public String contentType;
    public ListDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDeploymentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDeployments200ApplicationJson listDeployments200ApplicationJSONObject;
    public ListDeploymentsResponse withListDeployments200ApplicationJsonObject(ListDeployments200ApplicationJson listDeployments200ApplicationJSONObject) {
        this.listDeployments200ApplicationJSONObject = listDeployments200ApplicationJSONObject;
        return this;
    }
    public ListDeployments401ApplicationJson listDeployments401ApplicationJSONObject;
    public ListDeploymentsResponse withListDeployments401ApplicationJsonObject(ListDeployments401ApplicationJson listDeployments401ApplicationJSONObject) {
        this.listDeployments401ApplicationJSONObject = listDeployments401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDeploymentsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}