package openapisdk.models.operations;



public class GetFloatingIpResponse {
    public String contentType;
    public GetFloatingIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFloatingIpResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetFloatingIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetFloatingIp200ApplicationJson getFloatingIp200ApplicationJSONObject;
    public GetFloatingIpResponse withGetFloatingIp200ApplicationJsonObject(GetFloatingIp200ApplicationJson getFloatingIp200ApplicationJSONObject) {
        this.getFloatingIp200ApplicationJSONObject = getFloatingIp200ApplicationJSONObject;
        return this;
    }
    public GetFloatingIp401ApplicationJson getFloatingIp401ApplicationJSONObject;
    public GetFloatingIpResponse withGetFloatingIp401ApplicationJsonObject(GetFloatingIp401ApplicationJson getFloatingIp401ApplicationJSONObject) {
        this.getFloatingIp401ApplicationJSONObject = getFloatingIp401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetFloatingIpResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}