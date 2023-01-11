package openapisdk.models.operations;



public class GetVolumeResponse {
    public String contentType;
    public GetVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetVolumeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getVolume200ApplicationJSONAny;
    public GetVolumeResponse withGetVolume200ApplicationJsonAny(Object getVolume200ApplicationJSONAny) {
        this.getVolume200ApplicationJSONAny = getVolume200ApplicationJSONAny;
        return this;
    }
    public GetVolume401ApplicationJson getVolume401ApplicationJSONObject;
    public GetVolumeResponse withGetVolume401ApplicationJsonObject(GetVolume401ApplicationJson getVolume401ApplicationJSONObject) {
        this.getVolume401ApplicationJSONObject = getVolume401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetVolumeResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}