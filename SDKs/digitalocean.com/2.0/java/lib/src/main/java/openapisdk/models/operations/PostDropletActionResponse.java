package openapisdk.models.operations;



public class PostDropletActionResponse {
    public String contentType;
    public PostDropletActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDropletActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostDropletActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object postDropletAction201ApplicationJSONAny;
    public PostDropletActionResponse withPostDropletAction201ApplicationJsonAny(Object postDropletAction201ApplicationJSONAny) {
        this.postDropletAction201ApplicationJSONAny = postDropletAction201ApplicationJSONAny;
        return this;
    }
    public PostDropletAction401ApplicationJson postDropletAction401ApplicationJSONObject;
    public PostDropletActionResponse withPostDropletAction401ApplicationJsonObject(PostDropletAction401ApplicationJson postDropletAction401ApplicationJSONObject) {
        this.postDropletAction401ApplicationJSONObject = postDropletAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PostDropletActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}