package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCampaignRequestBody {
    @JsonProperty("WriteCampaignRequest")
    public CreateCampaignRequestBodyWriteCampaignRequest writeCampaignRequest;
    public CreateCampaignRequestBody withWriteCampaignRequest(CreateCampaignRequestBodyWriteCampaignRequest writeCampaignRequest) {
        this.writeCampaignRequest = writeCampaignRequest;
        return this;
    }
}