package openapisdk.models.operations;



public class DeleteConnectionPoolResponse {
    public String contentType;
    public DeleteConnectionPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteConnectionPoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteConnectionPool401ApplicationJson deleteConnectionPool401ApplicationJSONObject;
    public DeleteConnectionPoolResponse withDeleteConnectionPool401ApplicationJsonObject(DeleteConnectionPool401ApplicationJson deleteConnectionPool401ApplicationJSONObject) {
        this.deleteConnectionPool401ApplicationJSONObject = deleteConnectionPool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteConnectionPoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}