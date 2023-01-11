package openapisdk.models.operations;



public class ListAppsResponse {
    public String contentType;
    public ListAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAppsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListApps200ApplicationJson listApps200ApplicationJSONObject;
    public ListAppsResponse withListApps200ApplicationJsonObject(ListApps200ApplicationJson listApps200ApplicationJSONObject) {
        this.listApps200ApplicationJSONObject = listApps200ApplicationJSONObject;
        return this;
    }
    public ListApps401ApplicationJson listApps401ApplicationJSONObject;
    public ListAppsResponse withListApps401ApplicationJsonObject(ListApps401ApplicationJson listApps401ApplicationJSONObject) {
        this.listApps401ApplicationJSONObject = listApps401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAppsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}