package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InAppMessagesResponse
 * Get in-app messages response object.
**/
public class InAppMessagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InAppMessageCampaigns")
    public InAppMessageCampaign[] inAppMessageCampaigns;
    public InAppMessagesResponse withInAppMessageCampaigns(InAppMessageCampaign[] inAppMessageCampaigns) {
        this.inAppMessageCampaigns = inAppMessageCampaigns;
        return this;
    }
}