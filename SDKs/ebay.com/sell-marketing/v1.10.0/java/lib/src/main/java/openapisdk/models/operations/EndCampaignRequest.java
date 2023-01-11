package openapisdk.models.operations;



public class EndCampaignRequest {
    public EndCampaignPathParams pathParams;
    public EndCampaignRequest withPathParams(EndCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndCampaignSecurity security;
    public EndCampaignRequest withSecurity(EndCampaignSecurity security) {
        this.security = security;
        return this;
    }
}