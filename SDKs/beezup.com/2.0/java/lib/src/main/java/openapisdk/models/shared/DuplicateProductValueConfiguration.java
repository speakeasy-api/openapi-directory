package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DuplicateProductValueConfiguration
 * Describe how you want to manage the duplication of the product value
**/
public class DuplicateProductValueConfiguration {
    @JsonProperty("compareOptions")
    public CompareOptionsEnum compareOptions;
    public DuplicateProductValueConfiguration withCompareOptions(CompareOptionsEnum compareOptions) {
        this.compareOptions = compareOptions;
        return this;
    }
    @JsonProperty("strategy")
    public DuplicateProductValueStrategyEnum strategy;
    public DuplicateProductValueConfiguration withStrategy(DuplicateProductValueStrategyEnum strategy) {
        this.strategy = strategy;
        return this;
    }
}