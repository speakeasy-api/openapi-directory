/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Vochse502ApplicationJSON - Bad gateway
 */
public class Vochse502ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Vochse502ApplicationJSONErrorEnum error;

    public Vochse502ApplicationJSON withError(Vochse502ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Vochse502ApplicationJSONErrorDescriptionEnum errorDescription;

    public Vochse502ApplicationJSON withErrorDescription(Vochse502ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Vochse502ApplicationJSON(){}
}
