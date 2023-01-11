package openapisdk.models.operations;



public class ActionsListSelfHostedRunnersInGroupForOrgResponse {
    public String contentType;
    public ActionsListSelfHostedRunnersInGroupForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListSelfHostedRunnersInGroupForOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListSelfHostedRunnersInGroupForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject;
    public ActionsListSelfHostedRunnersInGroupForOrgResponse withActionsListSelfHostedRunnersInGroupForOrg200ApplicationJsonObject(ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject) {
        this.actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject = actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject;
        return this;
    }
}