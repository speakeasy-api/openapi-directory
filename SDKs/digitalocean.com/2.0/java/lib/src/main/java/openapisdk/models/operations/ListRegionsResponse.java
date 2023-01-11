package openapisdk.models.operations;



public class ListRegionsResponse {
    public String contentType;
    public ListRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListRegionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListRegions200ApplicationJson listRegions200ApplicationJSONObject;
    public ListRegionsResponse withListRegions200ApplicationJsonObject(ListRegions200ApplicationJson listRegions200ApplicationJSONObject) {
        this.listRegions200ApplicationJSONObject = listRegions200ApplicationJSONObject;
        return this;
    }
    public ListRegions401ApplicationJson listRegions401ApplicationJSONObject;
    public ListRegionsResponse withListRegions401ApplicationJsonObject(ListRegions401ApplicationJson listRegions401ApplicationJSONObject) {
        this.listRegions401ApplicationJSONObject = listRegions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListRegionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}