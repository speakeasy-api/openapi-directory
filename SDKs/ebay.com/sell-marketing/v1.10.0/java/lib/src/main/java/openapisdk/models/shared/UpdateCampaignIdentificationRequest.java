package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCampaignIdentificationRequest
 * This type specifies the updated name, and start and end dates for an update-campaign request.
**/
public class UpdateCampaignIdentificationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignName")
    public String campaignName;
    public UpdateCampaignIdentificationRequest withCampaignName(String campaignName) {
        this.campaignName = campaignName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public UpdateCampaignIdentificationRequest withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public UpdateCampaignIdentificationRequest withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}