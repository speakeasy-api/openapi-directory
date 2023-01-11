package openapisdk.models.operations;



public class FindCampaignByAdReferenceRequest {
    public FindCampaignByAdReferenceQueryParams queryParams;
    public FindCampaignByAdReferenceRequest withQueryParams(FindCampaignByAdReferenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FindCampaignByAdReferenceSecurity security;
    public FindCampaignByAdReferenceRequest withSecurity(FindCampaignByAdReferenceSecurity security) {
        this.security = security;
        return this;
    }
}