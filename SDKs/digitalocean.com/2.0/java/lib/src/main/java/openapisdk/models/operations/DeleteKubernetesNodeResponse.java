package openapisdk.models.operations;



public class DeleteKubernetesNodeResponse {
    public String contentType;
    public DeleteKubernetesNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteKubernetesNodeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteKubernetesNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteKubernetesNode401ApplicationJson deleteKubernetesNode401ApplicationJSONObject;
    public DeleteKubernetesNodeResponse withDeleteKubernetesNode401ApplicationJsonObject(DeleteKubernetesNode401ApplicationJson deleteKubernetesNode401ApplicationJSONObject) {
        this.deleteKubernetesNode401ApplicationJSONObject = deleteKubernetesNode401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteKubernetesNodeResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}