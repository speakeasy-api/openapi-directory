package openapisdk.models.operations;



public class GetTierResponse {
    public String contentType;
    public GetTierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTierResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTier200ApplicationJson getTier200ApplicationJSONObject;
    public GetTierResponse withGetTier200ApplicationJsonObject(GetTier200ApplicationJson getTier200ApplicationJSONObject) {
        this.getTier200ApplicationJSONObject = getTier200ApplicationJSONObject;
        return this;
    }
    public GetTier401ApplicationJson getTier401ApplicationJSONObject;
    public GetTierResponse withGetTier401ApplicationJsonObject(GetTier401ApplicationJson getTier401ApplicationJSONObject) {
        this.getTier401ApplicationJSONObject = getTier401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetTierResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}