package openapisdk.models.operations;



public class PostDropletActionByTagResponse {
    public String contentType;
    public PostDropletActionByTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDropletActionByTagResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostDropletActionByTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object postDropletActionByTag201ApplicationJSONAny;
    public PostDropletActionByTagResponse withPostDropletActionByTag201ApplicationJsonAny(Object postDropletActionByTag201ApplicationJSONAny) {
        this.postDropletActionByTag201ApplicationJSONAny = postDropletActionByTag201ApplicationJSONAny;
        return this;
    }
    public PostDropletActionByTag401ApplicationJson postDropletActionByTag401ApplicationJSONObject;
    public PostDropletActionByTagResponse withPostDropletActionByTag401ApplicationJsonObject(PostDropletActionByTag401ApplicationJson postDropletActionByTag401ApplicationJSONObject) {
        this.postDropletActionByTag401ApplicationJSONObject = postDropletActionByTag401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PostDropletActionByTagResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}