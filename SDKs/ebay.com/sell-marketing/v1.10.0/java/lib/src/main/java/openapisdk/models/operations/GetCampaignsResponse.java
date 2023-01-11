package openapisdk.models.operations;



public class GetCampaignsResponse {
    public openapisdk.models.shared.CampaignPagedCollection campaignPagedCollection;
    public GetCampaignsResponse withCampaignPagedCollection(openapisdk.models.shared.CampaignPagedCollection campaignPagedCollection) {
        this.campaignPagedCollection = campaignPagedCollection;
        return this;
    }
    public String contentType;
    public GetCampaignsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCampaignsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}