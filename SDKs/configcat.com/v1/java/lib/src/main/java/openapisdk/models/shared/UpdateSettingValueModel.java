package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingValueModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutPercentageItems")
    public RolloutPercentageItemModel[] rolloutPercentageItems;
    public UpdateSettingValueModel withRolloutPercentageItems(RolloutPercentageItemModel[] rolloutPercentageItems) {
        this.rolloutPercentageItems = rolloutPercentageItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rolloutRules")
    public RolloutRuleModel[] rolloutRules;
    public UpdateSettingValueModel withRolloutRules(RolloutRuleModel[] rolloutRules) {
        this.rolloutRules = rolloutRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public UpdateSettingValueModel withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}