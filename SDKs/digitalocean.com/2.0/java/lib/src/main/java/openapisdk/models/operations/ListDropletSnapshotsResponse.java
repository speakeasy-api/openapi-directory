package openapisdk.models.operations;



public class ListDropletSnapshotsResponse {
    public String contentType;
    public ListDropletSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDropletSnapshotsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDropletSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDropletSnapshots200ApplicationJson listDropletSnapshots200ApplicationJSONObject;
    public ListDropletSnapshotsResponse withListDropletSnapshots200ApplicationJsonObject(ListDropletSnapshots200ApplicationJson listDropletSnapshots200ApplicationJSONObject) {
        this.listDropletSnapshots200ApplicationJSONObject = listDropletSnapshots200ApplicationJSONObject;
        return this;
    }
    public ListDropletSnapshots401ApplicationJson listDropletSnapshots401ApplicationJSONObject;
    public ListDropletSnapshotsResponse withListDropletSnapshots401ApplicationJsonObject(ListDropletSnapshots401ApplicationJson listDropletSnapshots401ApplicationJSONObject) {
        this.listDropletSnapshots401ApplicationJSONObject = listDropletSnapshots401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDropletSnapshotsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}