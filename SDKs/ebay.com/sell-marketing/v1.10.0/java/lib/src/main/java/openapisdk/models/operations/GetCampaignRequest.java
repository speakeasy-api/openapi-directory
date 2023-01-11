package openapisdk.models.operations;



public class GetCampaignRequest {
    public GetCampaignPathParams pathParams;
    public GetCampaignRequest withPathParams(GetCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCampaignSecurity security;
    public GetCampaignRequest withSecurity(GetCampaignSecurity security) {
        this.security = security;
        return this;
    }
}