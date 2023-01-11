package openapisdk.models.operations;



public class DeleteOnlineMigrationResponse {
    public String contentType;
    public DeleteOnlineMigrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteOnlineMigrationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteOnlineMigrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteOnlineMigration401ApplicationJson deleteOnlineMigration401ApplicationJSONObject;
    public DeleteOnlineMigrationResponse withDeleteOnlineMigration401ApplicationJsonObject(DeleteOnlineMigration401ApplicationJson deleteOnlineMigration401ApplicationJSONObject) {
        this.deleteOnlineMigration401ApplicationJSONObject = deleteOnlineMigration401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteOnlineMigrationResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}