package openapisdk.models.operations;



public class ListRegistryRepositoriesResponse {
    public String contentType;
    public ListRegistryRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListRegistryRepositoriesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListRegistryRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListRegistryRepositories200ApplicationJson listRegistryRepositories200ApplicationJSONObject;
    public ListRegistryRepositoriesResponse withListRegistryRepositories200ApplicationJsonObject(ListRegistryRepositories200ApplicationJson listRegistryRepositories200ApplicationJSONObject) {
        this.listRegistryRepositories200ApplicationJSONObject = listRegistryRepositories200ApplicationJSONObject;
        return this;
    }
    public ListRegistryRepositories401ApplicationJson listRegistryRepositories401ApplicationJSONObject;
    public ListRegistryRepositoriesResponse withListRegistryRepositories401ApplicationJsonObject(ListRegistryRepositories401ApplicationJson listRegistryRepositories401ApplicationJSONObject) {
        this.listRegistryRepositories401ApplicationJSONObject = listRegistryRepositories401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListRegistryRepositoriesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}