package openapisdk.models.operations;



public class ListVolumeSnapshotsResponse {
    public String contentType;
    public ListVolumeSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListVolumeSnapshotsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListVolumeSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListVolumeSnapshots200ApplicationJson listVolumeSnapshots200ApplicationJSONObject;
    public ListVolumeSnapshotsResponse withListVolumeSnapshots200ApplicationJsonObject(ListVolumeSnapshots200ApplicationJson listVolumeSnapshots200ApplicationJSONObject) {
        this.listVolumeSnapshots200ApplicationJSONObject = listVolumeSnapshots200ApplicationJSONObject;
        return this;
    }
    public ListVolumeSnapshots401ApplicationJson listVolumeSnapshots401ApplicationJSONObject;
    public ListVolumeSnapshotsResponse withListVolumeSnapshots401ApplicationJsonObject(ListVolumeSnapshots401ApplicationJson listVolumeSnapshots401ApplicationJSONObject) {
        this.listVolumeSnapshots401ApplicationJSONObject = listVolumeSnapshots401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListVolumeSnapshotsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}