package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeState")
    public Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema chargeState;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withChargeState(Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema chargeState) {
        this.chargeState = chargeState;
        return this;
    }
    @JsonProperty("chargingLocationId")
    public String chargingLocationId;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withChargingLocationId(String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("information")
    public Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema information;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withInformation(Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema information) {
        this.information = information;
        return this;
    }
    @JsonProperty("isReachable")
    public Boolean isReachable;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withIsReachable(Boolean isReachable) {
        this.isReachable = isReachable;
        return this;
    }
    @JsonProperty("lastSeen")
    public LocalDate lastSeen;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withLastSeen(LocalDate lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema location;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withLocation(Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("odometer")
    public Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema odometer;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withOdometer(Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema odometer) {
        this.odometer = odometer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smartChargingPolicy")
    public Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema smartChargingPolicy;
    public Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema withSmartChargingPolicy(Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema smartChargingPolicy) {
        this.smartChargingPolicy = smartChargingPolicy;
        return this;
    }
}