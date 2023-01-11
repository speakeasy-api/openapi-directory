package openapisdk.models.operations;



public class InstallKubernetesResponse {
    public String contentType;
    public InstallKubernetesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public InstallKubernetesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public InstallKubernetesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public InstallKubernetes200ApplicationJson installKubernetes200ApplicationJSONObject;
    public InstallKubernetesResponse withInstallKubernetes200ApplicationJsonObject(InstallKubernetes200ApplicationJson installKubernetes200ApplicationJSONObject) {
        this.installKubernetes200ApplicationJSONObject = installKubernetes200ApplicationJSONObject;
        return this;
    }
    public InstallKubernetes401ApplicationJson installKubernetes401ApplicationJSONObject;
    public InstallKubernetesResponse withInstallKubernetes401ApplicationJsonObject(InstallKubernetes401ApplicationJson installKubernetes401ApplicationJSONObject) {
        this.installKubernetes401ApplicationJSONObject = installKubernetes401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public InstallKubernetesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}