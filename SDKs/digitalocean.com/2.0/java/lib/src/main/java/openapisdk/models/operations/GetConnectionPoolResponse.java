package openapisdk.models.operations;



public class GetConnectionPoolResponse {
    public String contentType;
    public GetConnectionPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetConnectionPoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetConnectionPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetConnectionPool200ApplicationJson getConnectionPool200ApplicationJSONObject;
    public GetConnectionPoolResponse withGetConnectionPool200ApplicationJsonObject(GetConnectionPool200ApplicationJson getConnectionPool200ApplicationJSONObject) {
        this.getConnectionPool200ApplicationJSONObject = getConnectionPool200ApplicationJSONObject;
        return this;
    }
    public GetConnectionPool401ApplicationJson getConnectionPool401ApplicationJSONObject;
    public GetConnectionPoolResponse withGetConnectionPool401ApplicationJsonObject(GetConnectionPool401ApplicationJson getConnectionPool401ApplicationJSONObject) {
        this.getConnectionPool401ApplicationJSONObject = getConnectionPool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetConnectionPoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}