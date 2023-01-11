package openapisdk.models.operations;



public class PostFloatingIpActionResponse {
    public String contentType;
    public PostFloatingIpActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostFloatingIpActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostFloatingIpActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object postFloatingIpAction201ApplicationJSONAny;
    public PostFloatingIpActionResponse withPostFloatingIpAction201ApplicationJsonAny(Object postFloatingIpAction201ApplicationJSONAny) {
        this.postFloatingIpAction201ApplicationJSONAny = postFloatingIpAction201ApplicationJSONAny;
        return this;
    }
    public PostFloatingIpAction401ApplicationJson postFloatingIpAction401ApplicationJSONObject;
    public PostFloatingIpActionResponse withPostFloatingIpAction401ApplicationJsonObject(PostFloatingIpAction401ApplicationJson postFloatingIpAction401ApplicationJSONObject) {
        this.postFloatingIpAction401ApplicationJSONObject = postFloatingIpAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PostFloatingIpActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}