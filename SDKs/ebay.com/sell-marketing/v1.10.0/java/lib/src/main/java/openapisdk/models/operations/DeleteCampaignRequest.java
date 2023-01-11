package openapisdk.models.operations;



public class DeleteCampaignRequest {
    public DeleteCampaignPathParams pathParams;
    public DeleteCampaignRequest withPathParams(DeleteCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCampaignSecurity security;
    public DeleteCampaignRequest withSecurity(DeleteCampaignSecurity security) {
        this.security = security;
        return this;
    }
}