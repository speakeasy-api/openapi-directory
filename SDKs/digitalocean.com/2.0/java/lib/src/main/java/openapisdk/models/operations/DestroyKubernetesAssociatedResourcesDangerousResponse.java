package openapisdk.models.operations;



public class DestroyKubernetesAssociatedResourcesDangerousResponse {
    public String contentType;
    public DestroyKubernetesAssociatedResourcesDangerousResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyKubernetesAssociatedResourcesDangerousResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyKubernetesAssociatedResourcesDangerousResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyKubernetesAssociatedResourcesDangerous401ApplicationJson destroyKubernetesAssociatedResourcesDangerous401ApplicationJSONObject;
    public DestroyKubernetesAssociatedResourcesDangerousResponse withDestroyKubernetesAssociatedResourcesDangerous401ApplicationJsonObject(DestroyKubernetesAssociatedResourcesDangerous401ApplicationJson destroyKubernetesAssociatedResourcesDangerous401ApplicationJSONObject) {
        this.destroyKubernetesAssociatedResourcesDangerous401ApplicationJSONObject = destroyKubernetesAssociatedResourcesDangerous401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyKubernetesAssociatedResourcesDangerousResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}