/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Otcer400ApplicationJSON - Bad request
 */
public class Otcer400ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Otcer400ApplicationJSONErrorEnum error;

    public Otcer400ApplicationJSON withError(Otcer400ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Otcer400ApplicationJSONErrorDescriptionEnum errorDescription;

    public Otcer400ApplicationJSON withErrorDescription(Otcer400ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Otcer400ApplicationJSON(){}
}
