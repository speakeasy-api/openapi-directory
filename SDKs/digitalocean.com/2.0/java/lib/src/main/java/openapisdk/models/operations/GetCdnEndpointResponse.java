package openapisdk.models.operations;



public class GetCdnEndpointResponse {
    public String contentType;
    public GetCdnEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCdnEndpointResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCdnEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getCdnEndpoint200ApplicationJSONAny;
    public GetCdnEndpointResponse withGetCdnEndpoint200ApplicationJsonAny(Object getCdnEndpoint200ApplicationJSONAny) {
        this.getCdnEndpoint200ApplicationJSONAny = getCdnEndpoint200ApplicationJSONAny;
        return this;
    }
    public GetCdnEndpoint401ApplicationJson getCdnEndpoint401ApplicationJSONObject;
    public GetCdnEndpointResponse withGetCdnEndpoint401ApplicationJsonObject(GetCdnEndpoint401ApplicationJson getCdnEndpoint401ApplicationJSONObject) {
        this.getCdnEndpoint401ApplicationJSONObject = getCdnEndpoint401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetCdnEndpointResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}