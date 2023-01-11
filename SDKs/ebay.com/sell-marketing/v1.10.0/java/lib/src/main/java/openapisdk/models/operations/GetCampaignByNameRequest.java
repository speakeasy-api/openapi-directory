package openapisdk.models.operations;



public class GetCampaignByNameRequest {
    public GetCampaignByNameQueryParams queryParams;
    public GetCampaignByNameRequest withQueryParams(GetCampaignByNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCampaignByNameSecurity security;
    public GetCampaignByNameRequest withSecurity(GetCampaignByNameSecurity security) {
        this.security = security;
        return this;
    }
}