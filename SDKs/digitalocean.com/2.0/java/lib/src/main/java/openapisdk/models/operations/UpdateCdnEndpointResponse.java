package openapisdk.models.operations;



public class UpdateCdnEndpointResponse {
    public String contentType;
    public UpdateCdnEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateCdnEndpointResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateCdnEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateCdnEndpoint202ApplicationJSONAny;
    public UpdateCdnEndpointResponse withUpdateCdnEndpoint202ApplicationJsonAny(Object updateCdnEndpoint202ApplicationJSONAny) {
        this.updateCdnEndpoint202ApplicationJSONAny = updateCdnEndpoint202ApplicationJSONAny;
        return this;
    }
    public UpdateCdnEndpoint401ApplicationJson updateCdnEndpoint401ApplicationJSONObject;
    public UpdateCdnEndpointResponse withUpdateCdnEndpoint401ApplicationJsonObject(UpdateCdnEndpoint401ApplicationJson updateCdnEndpoint401ApplicationJSONObject) {
        this.updateCdnEndpoint401ApplicationJSONObject = updateCdnEndpoint401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateCdnEndpointResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}