package openapisdk.models.operations;



public class ListCdnEndpointsResponse {
    public String contentType;
    public ListCdnEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListCdnEndpointsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListCdnEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListCdnEndpoints200ApplicationJson listCdnEndpoints200ApplicationJSONObject;
    public ListCdnEndpointsResponse withListCdnEndpoints200ApplicationJsonObject(ListCdnEndpoints200ApplicationJson listCdnEndpoints200ApplicationJSONObject) {
        this.listCdnEndpoints200ApplicationJSONObject = listCdnEndpoints200ApplicationJSONObject;
        return this;
    }
    public ListCdnEndpoints401ApplicationJson listCdnEndpoints401ApplicationJSONObject;
    public ListCdnEndpointsResponse withListCdnEndpoints401ApplicationJsonObject(ListCdnEndpoints401ApplicationJson listCdnEndpoints401ApplicationJSONObject) {
        this.listCdnEndpoints401ApplicationJSONObject = listCdnEndpoints401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListCdnEndpointsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}