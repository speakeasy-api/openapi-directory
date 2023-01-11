package openapisdk.models.operations;



public class ActionsListOrgSecretsResponse {
    public String contentType;
    public ActionsListOrgSecretsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListOrgSecretsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListOrgSecretsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListOrgSecrets200ApplicationJson actionsListOrgSecrets200ApplicationJSONObject;
    public ActionsListOrgSecretsResponse withActionsListOrgSecrets200ApplicationJsonObject(ActionsListOrgSecrets200ApplicationJson actionsListOrgSecrets200ApplicationJSONObject) {
        this.actionsListOrgSecrets200ApplicationJSONObject = actionsListOrgSecrets200ApplicationJSONObject;
        return this;
    }
}