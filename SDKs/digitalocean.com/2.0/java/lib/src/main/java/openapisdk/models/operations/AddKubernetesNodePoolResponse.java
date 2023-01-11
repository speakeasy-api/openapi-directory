package openapisdk.models.operations;



public class AddKubernetesNodePoolResponse {
    public String contentType;
    public AddKubernetesNodePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddKubernetesNodePoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddKubernetesNodePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object addKubernetesNodePool201ApplicationJSONAny;
    public AddKubernetesNodePoolResponse withAddKubernetesNodePool201ApplicationJsonAny(Object addKubernetesNodePool201ApplicationJSONAny) {
        this.addKubernetesNodePool201ApplicationJSONAny = addKubernetesNodePool201ApplicationJSONAny;
        return this;
    }
    public AddKubernetesNodePool401ApplicationJson addKubernetesNodePool401ApplicationJSONObject;
    public AddKubernetesNodePoolResponse withAddKubernetesNodePool401ApplicationJsonObject(AddKubernetesNodePool401ApplicationJson addKubernetesNodePool401ApplicationJSONObject) {
        this.addKubernetesNodePool401ApplicationJSONObject = addKubernetesNodePool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddKubernetesNodePoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}