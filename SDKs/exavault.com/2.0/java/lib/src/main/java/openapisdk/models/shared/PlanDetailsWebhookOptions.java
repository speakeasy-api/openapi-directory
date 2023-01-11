package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlanDetailsWebhookOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public PlanDetailsWebhookOptions withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeTriggers")
    public String includeTriggers;
    public PlanDetailsWebhookOptions withIncludeTriggers(String includeTriggers) {
        this.includeTriggers = includeTriggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictionTypes")
    public String[] restrictionTypes;
    public PlanDetailsWebhookOptions withRestrictionTypes(String[] restrictionTypes) {
        this.restrictionTypes = restrictionTypes;
        return this;
    }
}