package openapisdk.models.operations;



public class GetVolumeSnapshotByIdResponse {
    public String contentType;
    public GetVolumeSnapshotByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetVolumeSnapshotByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetVolumeSnapshotByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getVolumeSnapshotById200ApplicationJSONAny;
    public GetVolumeSnapshotByIdResponse withGetVolumeSnapshotById200ApplicationJsonAny(Object getVolumeSnapshotById200ApplicationJSONAny) {
        this.getVolumeSnapshotById200ApplicationJSONAny = getVolumeSnapshotById200ApplicationJSONAny;
        return this;
    }
    public GetVolumeSnapshotById401ApplicationJson getVolumeSnapshotById401ApplicationJSONObject;
    public GetVolumeSnapshotByIdResponse withGetVolumeSnapshotById401ApplicationJsonObject(GetVolumeSnapshotById401ApplicationJson getVolumeSnapshotById401ApplicationJSONObject) {
        this.getVolumeSnapshotById401ApplicationJSONObject = getVolumeSnapshotById401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetVolumeSnapshotByIdResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}