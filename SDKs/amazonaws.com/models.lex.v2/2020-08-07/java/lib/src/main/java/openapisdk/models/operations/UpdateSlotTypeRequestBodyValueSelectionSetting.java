package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSlotTypeRequestBodyValueSelectionSetting
 * Contains settings used by Amazon Lex to select a slot value.
**/
public class UpdateSlotTypeRequestBodyValueSelectionSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexFilter")
    public openapisdk.models.shared.SlotValueRegexFilter regexFilter;
    public UpdateSlotTypeRequestBodyValueSelectionSetting withRegexFilter(openapisdk.models.shared.SlotValueRegexFilter regexFilter) {
        this.regexFilter = regexFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolutionStrategy")
    public openapisdk.models.shared.SlotValueResolutionStrategyEnum resolutionStrategy;
    public UpdateSlotTypeRequestBodyValueSelectionSetting withResolutionStrategy(openapisdk.models.shared.SlotValueResolutionStrategyEnum resolutionStrategy) {
        this.resolutionStrategy = resolutionStrategy;
        return this;
    }
}