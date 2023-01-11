package openapisdk.models.operations;



public class GetSnapshotResponse {
    public String contentType;
    public GetSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSnapshotResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getSnapshot200ApplicationJSONAny;
    public GetSnapshotResponse withGetSnapshot200ApplicationJsonAny(Object getSnapshot200ApplicationJSONAny) {
        this.getSnapshot200ApplicationJSONAny = getSnapshot200ApplicationJSONAny;
        return this;
    }
    public GetSnapshot401ApplicationJson getSnapshot401ApplicationJSONObject;
    public GetSnapshotResponse withGetSnapshot401ApplicationJsonObject(GetSnapshot401ApplicationJson getSnapshot401ApplicationJSONObject) {
        this.getSnapshot401ApplicationJSONObject = getSnapshot401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetSnapshotResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}