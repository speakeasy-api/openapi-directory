package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RolloutPercentageItemModel {
    @JsonProperty("percentage")
    public Long percentage;
    public RolloutPercentageItemModel withPercentage(Long percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public RolloutPercentageItemModel withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}