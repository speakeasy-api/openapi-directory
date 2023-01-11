package openapisdk.models.operations;



public class ListFloatingIpsResponse {
    public String contentType;
    public ListFloatingIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListFloatingIpsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListFloatingIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListFloatingIps200ApplicationJson listFloatingIps200ApplicationJSONObject;
    public ListFloatingIpsResponse withListFloatingIps200ApplicationJsonObject(ListFloatingIps200ApplicationJson listFloatingIps200ApplicationJSONObject) {
        this.listFloatingIps200ApplicationJSONObject = listFloatingIps200ApplicationJSONObject;
        return this;
    }
    public ListFloatingIps401ApplicationJson listFloatingIps401ApplicationJSONObject;
    public ListFloatingIpsResponse withListFloatingIps401ApplicationJsonObject(ListFloatingIps401ApplicationJson listFloatingIps401ApplicationJSONObject) {
        this.listFloatingIps401ApplicationJSONObject = listFloatingIps401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListFloatingIpsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}