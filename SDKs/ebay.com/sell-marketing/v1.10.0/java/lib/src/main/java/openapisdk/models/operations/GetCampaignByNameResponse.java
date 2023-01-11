package openapisdk.models.operations;



public class GetCampaignByNameResponse {
    public openapisdk.models.shared.Campaign campaign;
    public GetCampaignByNameResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public GetCampaignByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCampaignByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}