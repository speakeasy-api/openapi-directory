package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LateDataRuleConfiguration
 * The information needed to configure a delta time session window.
**/
public class LateDataRuleConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaTimeSessionWindowConfiguration")
    public DeltaTimeSessionWindowConfiguration deltaTimeSessionWindowConfiguration;
    public LateDataRuleConfiguration withDeltaTimeSessionWindowConfiguration(DeltaTimeSessionWindowConfiguration deltaTimeSessionWindowConfiguration) {
        this.deltaTimeSessionWindowConfiguration = deltaTimeSessionWindowConfiguration;
        return this;
    }
}