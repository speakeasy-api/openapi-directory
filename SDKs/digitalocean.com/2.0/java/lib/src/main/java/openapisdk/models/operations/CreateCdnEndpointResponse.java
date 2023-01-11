package openapisdk.models.operations;



public class CreateCdnEndpointResponse {
    public String contentType;
    public CreateCdnEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateCdnEndpointResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateCdnEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createCdnEndpoint201ApplicationJSONAny;
    public CreateCdnEndpointResponse withCreateCdnEndpoint201ApplicationJsonAny(Object createCdnEndpoint201ApplicationJSONAny) {
        this.createCdnEndpoint201ApplicationJSONAny = createCdnEndpoint201ApplicationJSONAny;
        return this;
    }
    public CreateCdnEndpoint401ApplicationJson createCdnEndpoint401ApplicationJSONObject;
    public CreateCdnEndpointResponse withCreateCdnEndpoint401ApplicationJsonObject(CreateCdnEndpoint401ApplicationJson createCdnEndpoint401ApplicationJSONObject) {
        this.createCdnEndpoint401ApplicationJSONObject = createCdnEndpoint401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateCdnEndpointResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}