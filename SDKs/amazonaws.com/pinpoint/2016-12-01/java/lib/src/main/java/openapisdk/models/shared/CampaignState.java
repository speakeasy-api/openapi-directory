package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignState
 * Provides information about the status of a campaign.
**/
public class CampaignState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CampaignStatus")
    public CampaignStatusEnum campaignStatus;
    public CampaignState withCampaignStatus(CampaignStatusEnum campaignStatus) {
        this.campaignStatus = campaignStatus;
        return this;
    }
}