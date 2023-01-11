package openapisdk.models.operations;



public class ActionsListSelectedReposForOrgSecretResponse {
    public String contentType;
    public ActionsListSelectedReposForOrgSecretResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsListSelectedReposForOrgSecretResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListSelectedReposForOrgSecret200ApplicationJson actionsListSelectedReposForOrgSecret200ApplicationJSONObject;
    public ActionsListSelectedReposForOrgSecretResponse withActionsListSelectedReposForOrgSecret200ApplicationJsonObject(ActionsListSelectedReposForOrgSecret200ApplicationJson actionsListSelectedReposForOrgSecret200ApplicationJSONObject) {
        this.actionsListSelectedReposForOrgSecret200ApplicationJSONObject = actionsListSelectedReposForOrgSecret200ApplicationJSONObject;
        return this;
    }
}