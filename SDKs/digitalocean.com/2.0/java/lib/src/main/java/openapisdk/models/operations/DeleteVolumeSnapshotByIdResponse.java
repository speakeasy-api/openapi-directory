package openapisdk.models.operations;



public class DeleteVolumeSnapshotByIdResponse {
    public String contentType;
    public DeleteVolumeSnapshotByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteVolumeSnapshotByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteVolumeSnapshotByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteVolumeSnapshotById401ApplicationJson deleteVolumeSnapshotById401ApplicationJSONObject;
    public DeleteVolumeSnapshotByIdResponse withDeleteVolumeSnapshotById401ApplicationJsonObject(DeleteVolumeSnapshotById401ApplicationJson deleteVolumeSnapshotById401ApplicationJSONObject) {
        this.deleteVolumeSnapshotById401ApplicationJSONObject = deleteVolumeSnapshotById401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteVolumeSnapshotByIdResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}