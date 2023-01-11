package openapisdk.models.operations;



public class GetProjectResponse {
    public String contentType;
    public GetProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetProjectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getProject200ApplicationJSONAny;
    public GetProjectResponse withGetProject200ApplicationJsonAny(Object getProject200ApplicationJSONAny) {
        this.getProject200ApplicationJSONAny = getProject200ApplicationJSONAny;
        return this;
    }
    public GetProject401ApplicationJson getProject401ApplicationJSONObject;
    public GetProjectResponse withGetProject401ApplicationJsonObject(GetProject401ApplicationJson getProject401ApplicationJSONObject) {
        this.getProject401ApplicationJSONObject = getProject401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetProjectResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}