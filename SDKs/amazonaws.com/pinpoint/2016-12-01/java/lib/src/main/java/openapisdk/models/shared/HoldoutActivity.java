package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HoldoutActivity
 * Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
**/
public class HoldoutActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextActivity")
    public String nextActivity;
    public HoldoutActivity withNextActivity(String nextActivity) {
        this.nextActivity = nextActivity;
        return this;
    }
    @JsonProperty("Percentage")
    public Long percentage;
    public HoldoutActivity withPercentage(Long percentage) {
        this.percentage = percentage;
        return this;
    }
}