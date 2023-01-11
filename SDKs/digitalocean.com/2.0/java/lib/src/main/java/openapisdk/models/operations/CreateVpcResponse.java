package openapisdk.models.operations;



public class CreateVpcResponse {
    public String contentType;
    public CreateVpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateVpcResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateVpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateVpc201ApplicationJson createVpc201ApplicationJSONObject;
    public CreateVpcResponse withCreateVpc201ApplicationJsonObject(CreateVpc201ApplicationJson createVpc201ApplicationJSONObject) {
        this.createVpc201ApplicationJSONObject = createVpc201ApplicationJSONObject;
        return this;
    }
    public CreateVpc401ApplicationJson createVpc401ApplicationJSONObject;
    public CreateVpcResponse withCreateVpc401ApplicationJsonObject(CreateVpc401ApplicationJson createVpc401ApplicationJSONObject) {
        this.createVpc401ApplicationJSONObject = createVpc401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateVpcResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}