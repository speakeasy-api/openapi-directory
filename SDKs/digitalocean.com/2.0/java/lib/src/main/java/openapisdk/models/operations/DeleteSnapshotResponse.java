package openapisdk.models.operations;



public class DeleteSnapshotResponse {
    public String contentType;
    public DeleteSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteSnapshotResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteSnapshot401ApplicationJson deleteSnapshot401ApplicationJSONObject;
    public DeleteSnapshotResponse withDeleteSnapshot401ApplicationJsonObject(DeleteSnapshot401ApplicationJson deleteSnapshot401ApplicationJSONObject) {
        this.deleteSnapshot401ApplicationJSONObject = deleteSnapshot401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteSnapshotResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}