package openapisdk.models.operations;



public class ResumeCampaignRequest {
    public ResumeCampaignPathParams pathParams;
    public ResumeCampaignRequest withPathParams(ResumeCampaignPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResumeCampaignSecurity security;
    public ResumeCampaignRequest withSecurity(ResumeCampaignSecurity security) {
        this.security = security;
        return this;
    }
}