package openapisdk.models.operations;



public class GetDefaultProjectResponse {
    public String contentType;
    public GetDefaultProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDefaultProjectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDefaultProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getDefaultProject200ApplicationJSONAny;
    public GetDefaultProjectResponse withGetDefaultProject200ApplicationJsonAny(Object getDefaultProject200ApplicationJSONAny) {
        this.getDefaultProject200ApplicationJSONAny = getDefaultProject200ApplicationJSONAny;
        return this;
    }
    public GetDefaultProject401ApplicationJson getDefaultProject401ApplicationJSONObject;
    public GetDefaultProjectResponse withGetDefaultProject401ApplicationJsonObject(GetDefaultProject401ApplicationJson getDefaultProject401ApplicationJSONObject) {
        this.getDefaultProject401ApplicationJSONObject = getDefaultProject401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDefaultProjectResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}