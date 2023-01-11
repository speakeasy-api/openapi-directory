package openapisdk.models.operations;



public class ListAllSnapshotsResponse {
    public String contentType;
    public ListAllSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllSnapshotsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllSnapshots200ApplicationJson listAllSnapshots200ApplicationJSONObject;
    public ListAllSnapshotsResponse withListAllSnapshots200ApplicationJsonObject(ListAllSnapshots200ApplicationJson listAllSnapshots200ApplicationJSONObject) {
        this.listAllSnapshots200ApplicationJSONObject = listAllSnapshots200ApplicationJSONObject;
        return this;
    }
    public ListAllSnapshots401ApplicationJson listAllSnapshots401ApplicationJSONObject;
    public ListAllSnapshotsResponse withListAllSnapshots401ApplicationJsonObject(ListAllSnapshots401ApplicationJson listAllSnapshots401ApplicationJSONObject) {
        this.listAllSnapshots401ApplicationJSONObject = listAllSnapshots401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllSnapshotsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}