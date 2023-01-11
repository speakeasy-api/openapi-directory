package openapisdk.models.operations;



public class GetDropletResponse {
    public String contentType;
    public GetDropletResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getDroplet200ApplicationJSONAny;
    public GetDropletResponse withGetDroplet200ApplicationJsonAny(Object getDroplet200ApplicationJSONAny) {
        this.getDroplet200ApplicationJSONAny = getDroplet200ApplicationJSONAny;
        return this;
    }
    public GetDroplet401ApplicationJson getDroplet401ApplicationJSONObject;
    public GetDropletResponse withGetDroplet401ApplicationJsonObject(GetDroplet401ApplicationJson getDroplet401ApplicationJSONObject) {
        this.getDroplet401ApplicationJSONObject = getDroplet401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}