package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeRate")
    public Double chargeRate;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState withChargeRate(Double chargeRate) {
        this.chargeRate = chargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCharging")
    public Boolean isCharging;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState withIsCharging(Boolean isCharging) {
        this.isCharging = isCharging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPluggedIn")
    public Boolean isPluggedIn;
    public Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState withIsPluggedIn(Boolean isPluggedIn) {
        this.isPluggedIn = isPluggedIn;
        return this;
    }
}