package openapisdk.models.operations;



public class ListAllKubernetesClustersResponse {
    public String contentType;
    public ListAllKubernetesClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllKubernetesClustersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllKubernetesClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllKubernetesClusters200ApplicationJson listAllKubernetesClusters200ApplicationJSONObject;
    public ListAllKubernetesClustersResponse withListAllKubernetesClusters200ApplicationJsonObject(ListAllKubernetesClusters200ApplicationJson listAllKubernetesClusters200ApplicationJSONObject) {
        this.listAllKubernetesClusters200ApplicationJSONObject = listAllKubernetesClusters200ApplicationJSONObject;
        return this;
    }
    public ListAllKubernetesClusters401ApplicationJson listAllKubernetesClusters401ApplicationJSONObject;
    public ListAllKubernetesClustersResponse withListAllKubernetesClusters401ApplicationJsonObject(ListAllKubernetesClusters401ApplicationJson listAllKubernetesClusters401ApplicationJSONObject) {
        this.listAllKubernetesClusters401ApplicationJSONObject = listAllKubernetesClusters401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllKubernetesClustersResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}