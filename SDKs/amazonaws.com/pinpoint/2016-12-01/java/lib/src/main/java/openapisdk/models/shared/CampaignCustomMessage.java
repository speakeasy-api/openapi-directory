package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignCustomMessage
 * Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
**/
public class CampaignCustomMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public String data;
    public CampaignCustomMessage withData(String data) {
        this.data = data;
        return this;
    }
}