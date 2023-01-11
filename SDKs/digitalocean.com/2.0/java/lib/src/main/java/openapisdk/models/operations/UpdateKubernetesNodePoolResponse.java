package openapisdk.models.operations;



public class UpdateKubernetesNodePoolResponse {
    public String contentType;
    public UpdateKubernetesNodePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateKubernetesNodePoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateKubernetesNodePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateKubernetesNodePool202ApplicationJSONAny;
    public UpdateKubernetesNodePoolResponse withUpdateKubernetesNodePool202ApplicationJsonAny(Object updateKubernetesNodePool202ApplicationJSONAny) {
        this.updateKubernetesNodePool202ApplicationJSONAny = updateKubernetesNodePool202ApplicationJSONAny;
        return this;
    }
    public UpdateKubernetesNodePool401ApplicationJson updateKubernetesNodePool401ApplicationJSONObject;
    public UpdateKubernetesNodePoolResponse withUpdateKubernetesNodePool401ApplicationJsonObject(UpdateKubernetesNodePool401ApplicationJson updateKubernetesNodePool401ApplicationJSONObject) {
        this.updateKubernetesNodePool401ApplicationJSONObject = updateKubernetesNodePool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateKubernetesNodePoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}