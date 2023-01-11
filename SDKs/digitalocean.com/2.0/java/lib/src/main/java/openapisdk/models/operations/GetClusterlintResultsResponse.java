package openapisdk.models.operations;



public class GetClusterlintResultsResponse {
    public String contentType;
    public GetClusterlintResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetClusterlintResultsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetClusterlintResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClusterlintResults200ApplicationJson getClusterlintResults200ApplicationJSONObject;
    public GetClusterlintResultsResponse withGetClusterlintResults200ApplicationJsonObject(GetClusterlintResults200ApplicationJson getClusterlintResults200ApplicationJSONObject) {
        this.getClusterlintResults200ApplicationJSONObject = getClusterlintResults200ApplicationJSONObject;
        return this;
    }
    public GetClusterlintResults401ApplicationJson getClusterlintResults401ApplicationJSONObject;
    public GetClusterlintResultsResponse withGetClusterlintResults401ApplicationJsonObject(GetClusterlintResults401ApplicationJson getClusterlintResults401ApplicationJSONObject) {
        this.getClusterlintResults401ApplicationJSONObject = getClusterlintResults401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetClusterlintResultsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}