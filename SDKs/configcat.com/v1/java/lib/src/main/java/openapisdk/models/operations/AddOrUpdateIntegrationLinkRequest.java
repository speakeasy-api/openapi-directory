package openapisdk.models.operations;



public class AddOrUpdateIntegrationLinkRequest {
    public AddOrUpdateIntegrationLinkPathParams pathParams;
    public AddOrUpdateIntegrationLinkRequest withPathParams(AddOrUpdateIntegrationLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddOrUpdateIntegrationLinkRequests request;
    public AddOrUpdateIntegrationLinkRequest withRequest(AddOrUpdateIntegrationLinkRequests request) {
        this.request = request;
        return this;
    }
}