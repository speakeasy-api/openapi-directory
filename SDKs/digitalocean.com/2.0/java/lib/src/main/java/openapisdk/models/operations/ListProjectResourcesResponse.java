package openapisdk.models.operations;



public class ListProjectResourcesResponse {
    public String contentType;
    public ListProjectResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListProjectResourcesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListProjectResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListProjectResources200ApplicationJson listProjectResources200ApplicationJSONObject;
    public ListProjectResourcesResponse withListProjectResources200ApplicationJsonObject(ListProjectResources200ApplicationJson listProjectResources200ApplicationJSONObject) {
        this.listProjectResources200ApplicationJSONObject = listProjectResources200ApplicationJSONObject;
        return this;
    }
    public ListProjectResources401ApplicationJson listProjectResources401ApplicationJSONObject;
    public ListProjectResourcesResponse withListProjectResources401ApplicationJsonObject(ListProjectResources401ApplicationJson listProjectResources401ApplicationJSONObject) {
        this.listProjectResources401ApplicationJSONObject = listProjectResources401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListProjectResourcesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}