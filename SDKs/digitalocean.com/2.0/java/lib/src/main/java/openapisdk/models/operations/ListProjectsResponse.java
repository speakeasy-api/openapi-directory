package openapisdk.models.operations;



public class ListProjectsResponse {
    public String contentType;
    public ListProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListProjectsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListProjects200ApplicationJson listProjects200ApplicationJSONObject;
    public ListProjectsResponse withListProjects200ApplicationJsonObject(ListProjects200ApplicationJson listProjects200ApplicationJSONObject) {
        this.listProjects200ApplicationJSONObject = listProjects200ApplicationJSONObject;
        return this;
    }
    public ListProjects401ApplicationJson listProjects401ApplicationJSONObject;
    public ListProjectsResponse withListProjects401ApplicationJsonObject(ListProjects401ApplicationJson listProjects401ApplicationJSONObject) {
        this.listProjects401ApplicationJSONObject = listProjects401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListProjectsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}