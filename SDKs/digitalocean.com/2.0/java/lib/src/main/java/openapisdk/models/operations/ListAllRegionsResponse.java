package openapisdk.models.operations;



public class ListAllRegionsResponse {
    public String contentType;
    public ListAllRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllRegionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllRegions200ApplicationJson listAllRegions200ApplicationJSONObject;
    public ListAllRegionsResponse withListAllRegions200ApplicationJsonObject(ListAllRegions200ApplicationJson listAllRegions200ApplicationJSONObject) {
        this.listAllRegions200ApplicationJSONObject = listAllRegions200ApplicationJSONObject;
        return this;
    }
    public ListAllRegions401ApplicationJson listAllRegions401ApplicationJSONObject;
    public ListAllRegionsResponse withListAllRegions401ApplicationJsonObject(ListAllRegions401ApplicationJson listAllRegions401ApplicationJSONObject) {
        this.listAllRegions401ApplicationJSONObject = listAllRegions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllRegionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}