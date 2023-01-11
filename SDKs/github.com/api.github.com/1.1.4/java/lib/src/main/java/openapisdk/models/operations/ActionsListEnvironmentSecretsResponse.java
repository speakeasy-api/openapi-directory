package openapisdk.models.operations;



public class ActionsListEnvironmentSecretsResponse {
    public String contentType;
    public ActionsListEnvironmentSecretsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListEnvironmentSecretsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListEnvironmentSecretsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListEnvironmentSecrets200ApplicationJson actionsListEnvironmentSecrets200ApplicationJSONObject;
    public ActionsListEnvironmentSecretsResponse withActionsListEnvironmentSecrets200ApplicationJsonObject(ActionsListEnvironmentSecrets200ApplicationJson actionsListEnvironmentSecrets200ApplicationJSONObject) {
        this.actionsListEnvironmentSecrets200ApplicationJSONObject = actionsListEnvironmentSecrets200ApplicationJSONObject;
        return this;
    }
}