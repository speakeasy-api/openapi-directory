package openapisdk.models.operations;



public class DeleteAppResponse {
    public String contentType;
    public DeleteAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteAppResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteApp200ApplicationJson deleteApp200ApplicationJSONObject;
    public DeleteAppResponse withDeleteApp200ApplicationJsonObject(DeleteApp200ApplicationJson deleteApp200ApplicationJSONObject) {
        this.deleteApp200ApplicationJSONObject = deleteApp200ApplicationJSONObject;
        return this;
    }
    public DeleteApp401ApplicationJson deleteApp401ApplicationJSONObject;
    public DeleteAppResponse withDeleteApp401ApplicationJsonObject(DeleteApp401ApplicationJson deleteApp401ApplicationJSONObject) {
        this.deleteApp401ApplicationJSONObject = deleteApp401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteAppResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}