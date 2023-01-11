package openapisdk.models.operations;



public class CreateVolumeSnapshotResponse {
    public String contentType;
    public CreateVolumeSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateVolumeSnapshotResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateVolumeSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createVolumeSnapshot201ApplicationJSONAny;
    public CreateVolumeSnapshotResponse withCreateVolumeSnapshot201ApplicationJsonAny(Object createVolumeSnapshot201ApplicationJSONAny) {
        this.createVolumeSnapshot201ApplicationJSONAny = createVolumeSnapshot201ApplicationJSONAny;
        return this;
    }
    public CreateVolumeSnapshot401ApplicationJson createVolumeSnapshot401ApplicationJSONObject;
    public CreateVolumeSnapshotResponse withCreateVolumeSnapshot401ApplicationJsonObject(CreateVolumeSnapshot401ApplicationJson createVolumeSnapshot401ApplicationJSONObject) {
        this.createVolumeSnapshot401ApplicationJSONObject = createVolumeSnapshot401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateVolumeSnapshotResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}