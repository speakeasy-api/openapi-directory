package openapisdk.models.operations;



public class DeleteFloatingIpResponse {
    public String contentType;
    public DeleteFloatingIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteFloatingIpResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteFloatingIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteFloatingIp401ApplicationJson deleteFloatingIp401ApplicationJSONObject;
    public DeleteFloatingIpResponse withDeleteFloatingIp401ApplicationJsonObject(DeleteFloatingIp401ApplicationJson deleteFloatingIp401ApplicationJSONObject) {
        this.deleteFloatingIp401ApplicationJSONObject = deleteFloatingIp401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteFloatingIpResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}