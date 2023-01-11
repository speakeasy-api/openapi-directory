package openapisdk.models.operations;



public class FindCampaignByAdReferenceResponse {
    public openapisdk.models.shared.Campaigns campaigns;
    public FindCampaignByAdReferenceResponse withCampaigns(openapisdk.models.shared.Campaigns campaigns) {
        this.campaigns = campaigns;
        return this;
    }
    public String contentType;
    public FindCampaignByAdReferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FindCampaignByAdReferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}