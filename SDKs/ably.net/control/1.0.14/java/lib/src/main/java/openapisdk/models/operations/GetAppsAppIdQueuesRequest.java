package openapisdk.models.operations;



public class GetAppsAppIdQueuesRequest {
    public GetAppsAppIdQueuesPathParams pathParams;
    public GetAppsAppIdQueuesRequest withPathParams(GetAppsAppIdQueuesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAppsAppIdQueuesSecurity security;
    public GetAppsAppIdQueuesRequest withSecurity(GetAppsAppIdQueuesSecurity security) {
        this.security = security;
        return this;
    }
}