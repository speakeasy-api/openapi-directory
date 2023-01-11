package openapisdk.models.operations;



public class GetActionResponse {
    public String contentType;
    public GetActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getAction200ApplicationJSONAny;
    public GetActionResponse withGetAction200ApplicationJsonAny(Object getAction200ApplicationJSONAny) {
        this.getAction200ApplicationJSONAny = getAction200ApplicationJSONAny;
        return this;
    }
    public GetAction401ApplicationJson getAction401ApplicationJSONObject;
    public GetActionResponse withGetAction401ApplicationJsonObject(GetAction401ApplicationJson getAction401ApplicationJSONObject) {
        this.getAction401ApplicationJSONObject = getAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}