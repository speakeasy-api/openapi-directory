package openapisdk.models.operations;



public class GetDropletActionResponse {
    public String contentType;
    public GetDropletActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getDropletAction200ApplicationJSONAny;
    public GetDropletActionResponse withGetDropletAction200ApplicationJsonAny(Object getDropletAction200ApplicationJSONAny) {
        this.getDropletAction200ApplicationJSONAny = getDropletAction200ApplicationJSONAny;
        return this;
    }
    public GetDropletAction401ApplicationJson getDropletAction401ApplicationJSONObject;
    public GetDropletActionResponse withGetDropletAction401ApplicationJsonObject(GetDropletAction401ApplicationJson getDropletAction401ApplicationJSONObject) {
        this.getDropletAction401ApplicationJSONObject = getDropletAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}