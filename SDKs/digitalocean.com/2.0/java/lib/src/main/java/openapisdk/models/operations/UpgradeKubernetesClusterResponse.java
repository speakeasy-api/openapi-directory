package openapisdk.models.operations;



public class UpgradeKubernetesClusterResponse {
    public String contentType;
    public UpgradeKubernetesClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpgradeKubernetesClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpgradeKubernetesClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpgradeKubernetesCluster401ApplicationJson upgradeKubernetesCluster401ApplicationJSONObject;
    public UpgradeKubernetesClusterResponse withUpgradeKubernetesCluster401ApplicationJsonObject(UpgradeKubernetesCluster401ApplicationJson upgradeKubernetesCluster401ApplicationJSONObject) {
        this.upgradeKubernetesCluster401ApplicationJSONObject = upgradeKubernetesCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpgradeKubernetesClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}