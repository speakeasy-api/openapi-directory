package openapisdk.models.operations;



public class PostVolumeActionByIdResponse {
    public String contentType;
    public PostVolumeActionByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostVolumeActionByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostVolumeActionByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object postVolumeActionById202ApplicationJSONAny;
    public PostVolumeActionByIdResponse withPostVolumeActionById202ApplicationJsonAny(Object postVolumeActionById202ApplicationJSONAny) {
        this.postVolumeActionById202ApplicationJSONAny = postVolumeActionById202ApplicationJSONAny;
        return this;
    }
    public PostVolumeActionById401ApplicationJson postVolumeActionById401ApplicationJSONObject;
    public PostVolumeActionByIdResponse withPostVolumeActionById401ApplicationJsonObject(PostVolumeActionById401ApplicationJson postVolumeActionById401ApplicationJSONObject) {
        this.postVolumeActionById401ApplicationJSONObject = postVolumeActionById401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PostVolumeActionByIdResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}