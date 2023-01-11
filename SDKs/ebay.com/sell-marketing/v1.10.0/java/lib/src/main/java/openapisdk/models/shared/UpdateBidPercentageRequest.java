package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBidPercentageRequest
 * This type specifies the bid percentage for an ad campaign.
**/
public class UpdateBidPercentageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public String bidPercentage;
    public UpdateBidPercentageRequest withBidPercentage(String bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
}