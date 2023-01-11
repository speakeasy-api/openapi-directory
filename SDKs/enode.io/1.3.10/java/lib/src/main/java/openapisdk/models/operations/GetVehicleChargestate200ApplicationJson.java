package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetVehicleChargestate200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batteryCapacity")
    public Double batteryCapacity;
    public GetVehicleChargestate200ApplicationJson withBatteryCapacity(Double batteryCapacity) {
        this.batteryCapacity = batteryCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batteryLevel")
    public Double batteryLevel;
    public GetVehicleChargestate200ApplicationJson withBatteryLevel(Double batteryLevel) {
        this.batteryLevel = batteryLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeLimit")
    public Double chargeLimit;
    public GetVehicleChargestate200ApplicationJson withChargeLimit(Double chargeLimit) {
        this.chargeLimit = chargeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeRate")
    public Double chargeRate;
    public GetVehicleChargestate200ApplicationJson withChargeRate(Double chargeRate) {
        this.chargeRate = chargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeTimeRemaining")
    public Double chargeTimeRemaining;
    public GetVehicleChargestate200ApplicationJson withChargeTimeRemaining(Double chargeTimeRemaining) {
        this.chargeTimeRemaining = chargeTimeRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCharging")
    public Boolean isCharging;
    public GetVehicleChargestate200ApplicationJson withIsCharging(Boolean isCharging) {
        this.isCharging = isCharging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isChargingReasons")
    public GetVehicleChargestate200ApplicationJsonIsChargingReasonsEnum[] isChargingReasons;
    public GetVehicleChargestate200ApplicationJson withIsChargingReasons(GetVehicleChargestate200ApplicationJsonIsChargingReasonsEnum[] isChargingReasons) {
        this.isChargingReasons = isChargingReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPluggedIn")
    public Boolean isPluggedIn;
    public GetVehicleChargestate200ApplicationJson withIsPluggedIn(Boolean isPluggedIn) {
        this.isPluggedIn = isPluggedIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public Double range;
    public GetVehicleChargestate200ApplicationJson withRange(Double range) {
        this.range = range;
        return this;
    }
}