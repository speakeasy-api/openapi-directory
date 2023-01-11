package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlotValueSelectionSetting
 * Contains settings used by Amazon Lex to select a slot value.
**/
public class SlotValueSelectionSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexFilter")
    public SlotValueRegexFilter regexFilter;
    public SlotValueSelectionSetting withRegexFilter(SlotValueRegexFilter regexFilter) {
        this.regexFilter = regexFilter;
        return this;
    }
    @JsonProperty("resolutionStrategy")
    public SlotValueResolutionStrategyEnum resolutionStrategy;
    public SlotValueSelectionSetting withResolutionStrategy(SlotValueResolutionStrategyEnum resolutionStrategy) {
        this.resolutionStrategy = resolutionStrategy;
        return this;
    }
}