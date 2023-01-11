package openapisdk.models.operations;



public class GetKubeconfigResponse {
    public String contentType;
    public GetKubeconfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetKubeconfigResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetKubeconfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getKubeconfig200ApplicationYamlString;
    public GetKubeconfigResponse withGetKubeconfig200ApplicationYamlString(String getKubeconfig200ApplicationYamlString) {
        this.getKubeconfig200ApplicationYamlString = getKubeconfig200ApplicationYamlString;
        return this;
    }
    public GetKubeconfig401ApplicationJson getKubeconfig401ApplicationJSONObject;
    public GetKubeconfigResponse withGetKubeconfig401ApplicationJsonObject(GetKubeconfig401ApplicationJson getKubeconfig401ApplicationJSONObject) {
        this.getKubeconfig401ApplicationJSONObject = getKubeconfig401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetKubeconfigResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}