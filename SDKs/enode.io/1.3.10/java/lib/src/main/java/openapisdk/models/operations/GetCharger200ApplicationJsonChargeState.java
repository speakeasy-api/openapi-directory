package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCharger200ApplicationJsonChargeState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeRate")
    public Double chargeRate;
    public GetCharger200ApplicationJsonChargeState withChargeRate(Double chargeRate) {
        this.chargeRate = chargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCharging")
    public Boolean isCharging;
    public GetCharger200ApplicationJsonChargeState withIsCharging(Boolean isCharging) {
        this.isCharging = isCharging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPluggedIn")
    public Boolean isPluggedIn;
    public GetCharger200ApplicationJsonChargeState withIsPluggedIn(Boolean isPluggedIn) {
        this.isPluggedIn = isPluggedIn;
        return this;
    }
}