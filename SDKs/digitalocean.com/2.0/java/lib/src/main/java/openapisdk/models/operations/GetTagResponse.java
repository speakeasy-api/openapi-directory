package openapisdk.models.operations;



public class GetTagResponse {
    public String contentType;
    public GetTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTagResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTag200ApplicationJson getTag200ApplicationJSONObject;
    public GetTagResponse withGetTag200ApplicationJsonObject(GetTag200ApplicationJson getTag200ApplicationJSONObject) {
        this.getTag200ApplicationJSONObject = getTag200ApplicationJSONObject;
        return this;
    }
    public GetTag401ApplicationJson getTag401ApplicationJSONObject;
    public GetTagResponse withGetTag401ApplicationJsonObject(GetTag401ApplicationJson getTag401ApplicationJSONObject) {
        this.getTag401ApplicationJSONObject = getTag401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetTagResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}