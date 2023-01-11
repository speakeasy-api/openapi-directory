package openapisdk.models.operations;



public class ActionsListSelfHostedRunnersForOrgResponse {
    public String contentType;
    public ActionsListSelfHostedRunnersForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListSelfHostedRunnersForOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListSelfHostedRunnersForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListSelfHostedRunnersForOrg200ApplicationJson actionsListSelfHostedRunnersForOrg200ApplicationJSONObject;
    public ActionsListSelfHostedRunnersForOrgResponse withActionsListSelfHostedRunnersForOrg200ApplicationJsonObject(ActionsListSelfHostedRunnersForOrg200ApplicationJson actionsListSelfHostedRunnersForOrg200ApplicationJSONObject) {
        this.actionsListSelfHostedRunnersForOrg200ApplicationJSONObject = actionsListSelfHostedRunnersForOrg200ApplicationJSONObject;
        return this;
    }
}