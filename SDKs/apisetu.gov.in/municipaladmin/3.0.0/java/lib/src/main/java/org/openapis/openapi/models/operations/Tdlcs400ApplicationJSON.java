/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tdlcs400ApplicationJSON - Bad request
 */
public class Tdlcs400ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Tdlcs400ApplicationJSONErrorEnum error;

    public Tdlcs400ApplicationJSON withError(Tdlcs400ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Tdlcs400ApplicationJSONErrorDescriptionEnum errorDescription;

    public Tdlcs400ApplicationJSON withErrorDescription(Tdlcs400ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Tdlcs400ApplicationJSON(){}
}
