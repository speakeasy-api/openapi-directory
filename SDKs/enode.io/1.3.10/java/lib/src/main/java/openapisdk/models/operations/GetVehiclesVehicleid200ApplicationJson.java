package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetVehiclesVehicleid200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeState")
    public openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema chargeState;
    public GetVehiclesVehicleid200ApplicationJson withChargeState(openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema chargeState) {
        this.chargeState = chargeState;
        return this;
    }
    @JsonProperty("chargingLocationId")
    public String chargingLocationId;
    public GetVehiclesVehicleid200ApplicationJson withChargingLocationId(String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GetVehiclesVehicleid200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("information")
    public openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema information;
    public GetVehiclesVehicleid200ApplicationJson withInformation(openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema information) {
        this.information = information;
        return this;
    }
    @JsonProperty("isReachable")
    public Boolean isReachable;
    public GetVehiclesVehicleid200ApplicationJson withIsReachable(Boolean isReachable) {
        this.isReachable = isReachable;
        return this;
    }
    @JsonProperty("lastSeen")
    public LocalDate lastSeen;
    public GetVehiclesVehicleid200ApplicationJson withLastSeen(LocalDate lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema location;
    public GetVehiclesVehicleid200ApplicationJson withLocation(openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("odometer")
    public openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema odometer;
    public GetVehiclesVehicleid200ApplicationJson withOdometer(openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema odometer) {
        this.odometer = odometer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smartChargingPolicy")
    public openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema smartChargingPolicy;
    public GetVehiclesVehicleid200ApplicationJson withSmartChargingPolicy(openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema smartChargingPolicy) {
        this.smartChargingPolicy = smartChargingPolicy;
        return this;
    }
}