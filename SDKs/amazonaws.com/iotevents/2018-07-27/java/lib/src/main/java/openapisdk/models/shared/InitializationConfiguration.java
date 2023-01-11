package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InitializationConfiguration
 * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
**/
public class InitializationConfiguration {
    @JsonProperty("disabledOnInitialization")
    public Boolean disabledOnInitialization;
    public InitializationConfiguration withDisabledOnInitialization(Boolean disabledOnInitialization) {
        this.disabledOnInitialization = disabledOnInitialization;
        return this;
    }
}