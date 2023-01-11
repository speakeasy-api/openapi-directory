package openapisdk.models.operations;



public class PostVolumeActionByNameResponse {
    public String contentType;
    public PostVolumeActionByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostVolumeActionByNameResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostVolumeActionByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object postVolumeActionByName202ApplicationJSONAny;
    public PostVolumeActionByNameResponse withPostVolumeActionByName202ApplicationJsonAny(Object postVolumeActionByName202ApplicationJSONAny) {
        this.postVolumeActionByName202ApplicationJSONAny = postVolumeActionByName202ApplicationJSONAny;
        return this;
    }
    public PostVolumeActionByName401ApplicationJson postVolumeActionByName401ApplicationJSONObject;
    public PostVolumeActionByNameResponse withPostVolumeActionByName401ApplicationJsonObject(PostVolumeActionByName401ApplicationJson postVolumeActionByName401ApplicationJSONObject) {
        this.postVolumeActionByName401ApplicationJSONObject = postVolumeActionByName401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PostVolumeActionByNameResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}