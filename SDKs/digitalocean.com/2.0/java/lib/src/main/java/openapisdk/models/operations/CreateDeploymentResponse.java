package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDeploymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateDeployment200ApplicationJson createDeployment200ApplicationJSONObject;
    public CreateDeploymentResponse withCreateDeployment200ApplicationJsonObject(CreateDeployment200ApplicationJson createDeployment200ApplicationJSONObject) {
        this.createDeployment200ApplicationJSONObject = createDeployment200ApplicationJSONObject;
        return this;
    }
    public CreateDeployment401ApplicationJson createDeployment401ApplicationJSONObject;
    public CreateDeploymentResponse withCreateDeployment401ApplicationJsonObject(CreateDeployment401ApplicationJson createDeployment401ApplicationJSONObject) {
        this.createDeployment401ApplicationJSONObject = createDeployment401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateDeploymentResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}