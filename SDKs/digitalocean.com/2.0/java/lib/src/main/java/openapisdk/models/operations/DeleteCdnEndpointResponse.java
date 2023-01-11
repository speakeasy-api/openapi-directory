package openapisdk.models.operations;



public class DeleteCdnEndpointResponse {
    public String contentType;
    public DeleteCdnEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteCdnEndpointResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteCdnEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteCdnEndpoint401ApplicationJson deleteCdnEndpoint401ApplicationJSONObject;
    public DeleteCdnEndpointResponse withDeleteCdnEndpoint401ApplicationJsonObject(DeleteCdnEndpoint401ApplicationJson deleteCdnEndpoint401ApplicationJSONObject) {
        this.deleteCdnEndpoint401ApplicationJSONObject = deleteCdnEndpoint401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteCdnEndpointResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}