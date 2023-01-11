package openapisdk.models.operations;



public class ListKubernetesAssociatedResourcesResponse {
    public String contentType;
    public ListKubernetesAssociatedResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListKubernetesAssociatedResourcesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListKubernetesAssociatedResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListKubernetesAssociatedResources200ApplicationJson listKubernetesAssociatedResources200ApplicationJSONObject;
    public ListKubernetesAssociatedResourcesResponse withListKubernetesAssociatedResources200ApplicationJsonObject(ListKubernetesAssociatedResources200ApplicationJson listKubernetesAssociatedResources200ApplicationJSONObject) {
        this.listKubernetesAssociatedResources200ApplicationJSONObject = listKubernetesAssociatedResources200ApplicationJSONObject;
        return this;
    }
    public ListKubernetesAssociatedResources401ApplicationJson listKubernetesAssociatedResources401ApplicationJSONObject;
    public ListKubernetesAssociatedResourcesResponse withListKubernetesAssociatedResources401ApplicationJsonObject(ListKubernetesAssociatedResources401ApplicationJson listKubernetesAssociatedResources401ApplicationJSONObject) {
        this.listKubernetesAssociatedResources401ApplicationJSONObject = listKubernetesAssociatedResources401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListKubernetesAssociatedResourcesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}