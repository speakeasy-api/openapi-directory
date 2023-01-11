package openapisdk.models.operations;



public class DeleteKubernetesNodePoolResponse {
    public String contentType;
    public DeleteKubernetesNodePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteKubernetesNodePoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteKubernetesNodePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteKubernetesNodePool401ApplicationJson deleteKubernetesNodePool401ApplicationJSONObject;
    public DeleteKubernetesNodePoolResponse withDeleteKubernetesNodePool401ApplicationJsonObject(DeleteKubernetesNodePool401ApplicationJson deleteKubernetesNodePool401ApplicationJSONObject) {
        this.deleteKubernetesNodePool401ApplicationJSONObject = deleteKubernetesNodePool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteKubernetesNodePoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}