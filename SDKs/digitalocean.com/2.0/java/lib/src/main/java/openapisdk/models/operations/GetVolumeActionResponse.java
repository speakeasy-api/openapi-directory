package openapisdk.models.operations;



public class GetVolumeActionResponse {
    public String contentType;
    public GetVolumeActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetVolumeActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetVolumeActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getVolumeAction200ApplicationJSONAny;
    public GetVolumeActionResponse withGetVolumeAction200ApplicationJsonAny(Object getVolumeAction200ApplicationJSONAny) {
        this.getVolumeAction200ApplicationJSONAny = getVolumeAction200ApplicationJSONAny;
        return this;
    }
    public GetVolumeAction401ApplicationJson getVolumeAction401ApplicationJSONObject;
    public GetVolumeActionResponse withGetVolumeAction401ApplicationJsonObject(GetVolumeAction401ApplicationJson getVolumeAction401ApplicationJSONObject) {
        this.getVolumeAction401ApplicationJSONObject = getVolumeAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetVolumeActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}