package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCampaignRequestBody {
    @JsonProperty("WriteCampaignRequest")
    public UpdateCampaignRequestBodyWriteCampaignRequest writeCampaignRequest;
    public UpdateCampaignRequestBody withWriteCampaignRequest(UpdateCampaignRequestBodyWriteCampaignRequest writeCampaignRequest) {
        this.writeCampaignRequest = writeCampaignRequest;
        return this;
    }
}