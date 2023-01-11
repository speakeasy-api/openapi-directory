package openapisdk.models.operations;



public class ListDefaultProjectResourcesResponse {
    public String contentType;
    public ListDefaultProjectResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDefaultProjectResourcesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDefaultProjectResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDefaultProjectResources200ApplicationJson listDefaultProjectResources200ApplicationJSONObject;
    public ListDefaultProjectResourcesResponse withListDefaultProjectResources200ApplicationJsonObject(ListDefaultProjectResources200ApplicationJson listDefaultProjectResources200ApplicationJSONObject) {
        this.listDefaultProjectResources200ApplicationJSONObject = listDefaultProjectResources200ApplicationJSONObject;
        return this;
    }
    public ListDefaultProjectResources401ApplicationJson listDefaultProjectResources401ApplicationJSONObject;
    public ListDefaultProjectResourcesResponse withListDefaultProjectResources401ApplicationJsonObject(ListDefaultProjectResources401ApplicationJson listDefaultProjectResources401ApplicationJSONObject) {
        this.listDefaultProjectResources401ApplicationJSONObject = listDefaultProjectResources401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDefaultProjectResourcesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}