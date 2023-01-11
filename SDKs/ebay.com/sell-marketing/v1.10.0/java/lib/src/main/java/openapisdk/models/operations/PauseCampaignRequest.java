package openapisdk.models.operations;



public class PauseCampaignRequest {
    public PauseCampaignPathParams pathParams;
    public PauseCampaignRequest withPathParams(PauseCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PauseCampaignSecurity security;
    public PauseCampaignRequest withSecurity(PauseCampaignSecurity security) {
        this.security = security;
        return this;
    }
}