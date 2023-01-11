package openapisdk.models.operations;



public class DeleteVolumeByNameResponse {
    public String contentType;
    public DeleteVolumeByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteVolumeByNameResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteVolumeByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteVolumeByName401ApplicationJson deleteVolumeByName401ApplicationJSONObject;
    public DeleteVolumeByNameResponse withDeleteVolumeByName401ApplicationJsonObject(DeleteVolumeByName401ApplicationJson deleteVolumeByName401ApplicationJSONObject) {
        this.deleteVolumeByName401ApplicationJSONObject = deleteVolumeByName401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteVolumeByNameResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}