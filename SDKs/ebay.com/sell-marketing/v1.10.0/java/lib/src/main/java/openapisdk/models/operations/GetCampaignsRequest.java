package openapisdk.models.operations;



public class GetCampaignsRequest {
    public GetCampaignsQueryParams queryParams;
    public GetCampaignsRequest withQueryParams(GetCampaignsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCampaignsSecurity security;
    public GetCampaignsRequest withSecurity(GetCampaignsSecurity security) {
        this.security = security;
        return this;
    }
}