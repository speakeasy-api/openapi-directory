package openapisdk.models.operations;



public class ListUsersResponse {
    public String contentType;
    public ListUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListUsersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object listUsers200ApplicationJSONAny;
    public ListUsersResponse withListUsers200ApplicationJsonAny(Object listUsers200ApplicationJSONAny) {
        this.listUsers200ApplicationJSONAny = listUsers200ApplicationJSONAny;
        return this;
    }
    public ListUsers401ApplicationJson listUsers401ApplicationJSONObject;
    public ListUsersResponse withListUsers401ApplicationJsonObject(ListUsers401ApplicationJson listUsers401ApplicationJSONObject) {
        this.listUsers401ApplicationJSONObject = listUsers401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListUsersResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}