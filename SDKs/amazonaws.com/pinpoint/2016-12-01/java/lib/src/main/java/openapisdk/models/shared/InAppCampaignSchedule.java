package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InAppCampaignSchedule
 * Schedule of the campaign.
**/
public class InAppCampaignSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public String endDate;
    public InAppCampaignSchedule withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventFilter")
    public CampaignEventFilter eventFilter;
    public InAppCampaignSchedule withEventFilter(CampaignEventFilter eventFilter) {
        this.eventFilter = eventFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QuietTime")
    public QuietTime quietTime;
    public InAppCampaignSchedule withQuietTime(QuietTime quietTime) {
        this.quietTime = quietTime;
        return this;
    }
}