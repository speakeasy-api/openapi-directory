package openapisdk.models.operations;



public class CreateFloatingIpResponse {
    public String contentType;
    public CreateFloatingIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateFloatingIpResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateFloatingIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateFloatingIp202ApplicationJson createFloatingIp202ApplicationJSONObject;
    public CreateFloatingIpResponse withCreateFloatingIp202ApplicationJsonObject(CreateFloatingIp202ApplicationJson createFloatingIp202ApplicationJSONObject) {
        this.createFloatingIp202ApplicationJSONObject = createFloatingIp202ApplicationJSONObject;
        return this;
    }
    public CreateFloatingIp401ApplicationJson createFloatingIp401ApplicationJSONObject;
    public CreateFloatingIpResponse withCreateFloatingIp401ApplicationJsonObject(CreateFloatingIp401ApplicationJson createFloatingIp401ApplicationJSONObject) {
        this.createFloatingIp401ApplicationJSONObject = createFloatingIp401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateFloatingIpResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}