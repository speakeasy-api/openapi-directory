package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batteryCapacity")
    public Double batteryCapacity;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withBatteryCapacity(Double batteryCapacity) {
        this.batteryCapacity = batteryCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batteryLevel")
    public Double batteryLevel;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withBatteryLevel(Double batteryLevel) {
        this.batteryLevel = batteryLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeLimit")
    public Double chargeLimit;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withChargeLimit(Double chargeLimit) {
        this.chargeLimit = chargeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeRate")
    public Double chargeRate;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withChargeRate(Double chargeRate) {
        this.chargeRate = chargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeTimeRemaining")
    public Double chargeTimeRemaining;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withChargeTimeRemaining(Double chargeTimeRemaining) {
        this.chargeTimeRemaining = chargeTimeRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCharging")
    public Boolean isCharging;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withIsCharging(Boolean isCharging) {
        this.isCharging = isCharging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isChargingReasons")
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum[] isChargingReasons;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withIsChargingReasons(Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum[] isChargingReasons) {
        this.isChargingReasons = isChargingReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPluggedIn")
    public Boolean isPluggedIn;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withIsPluggedIn(Boolean isPluggedIn) {
        this.isPluggedIn = isPluggedIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public Double range;
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema withRange(Double range) {
        this.range = range;
        return this;
    }
}