package openapisdk.models.operations;



public class GetCampaignResponse {
    public openapisdk.models.shared.Campaign campaign;
    public GetCampaignResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public GetCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}