package openapisdk.models.operations;



public class AddConnectionPoolResponse {
    public String contentType;
    public AddConnectionPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddConnectionPoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddConnectionPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddConnectionPool201ApplicationJson addConnectionPool201ApplicationJSONObject;
    public AddConnectionPoolResponse withAddConnectionPool201ApplicationJsonObject(AddConnectionPool201ApplicationJson addConnectionPool201ApplicationJSONObject) {
        this.addConnectionPool201ApplicationJSONObject = addConnectionPool201ApplicationJSONObject;
        return this;
    }
    public AddConnectionPool401ApplicationJson addConnectionPool401ApplicationJSONObject;
    public AddConnectionPoolResponse withAddConnectionPool401ApplicationJsonObject(AddConnectionPool401ApplicationJson addConnectionPool401ApplicationJSONObject) {
        this.addConnectionPool401ApplicationJSONObject = addConnectionPool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddConnectionPoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}