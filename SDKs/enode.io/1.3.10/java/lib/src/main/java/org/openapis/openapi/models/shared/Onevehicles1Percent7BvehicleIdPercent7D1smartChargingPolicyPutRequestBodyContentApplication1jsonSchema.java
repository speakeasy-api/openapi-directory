/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema - Successful
 */
public class Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema {
    /**
     * The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadline")
    public String deadline;

    public Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema withDeadline(String deadline) {
        this.deadline = deadline;
        return this;
    }
    
    /**
     * When enabled, this vehicle's charging status may be controlled by Smart Charging.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEnabled")
    public Boolean isEnabled;

    public Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
    
    public Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema(){}
}
