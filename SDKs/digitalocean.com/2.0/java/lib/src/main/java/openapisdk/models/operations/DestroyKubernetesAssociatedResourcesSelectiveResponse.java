package openapisdk.models.operations;



public class DestroyKubernetesAssociatedResourcesSelectiveResponse {
    public String contentType;
    public DestroyKubernetesAssociatedResourcesSelectiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyKubernetesAssociatedResourcesSelectiveResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyKubernetesAssociatedResourcesSelectiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyKubernetesAssociatedResourcesSelective401ApplicationJson destroyKubernetesAssociatedResourcesSelective401ApplicationJSONObject;
    public DestroyKubernetesAssociatedResourcesSelectiveResponse withDestroyKubernetesAssociatedResourcesSelective401ApplicationJsonObject(DestroyKubernetesAssociatedResourcesSelective401ApplicationJson destroyKubernetesAssociatedResourcesSelective401ApplicationJSONObject) {
        this.destroyKubernetesAssociatedResourcesSelective401ApplicationJSONObject = destroyKubernetesAssociatedResourcesSelective401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyKubernetesAssociatedResourcesSelectiveResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}