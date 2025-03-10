/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Mnrga400ApplicationJSON - Bad request
 */
public class Mnrga400ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Mnrga400ApplicationJSONErrorEnum error;

    public Mnrga400ApplicationJSON withError(Mnrga400ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Mnrga400ApplicationJSONErrorDescriptionEnum errorDescription;

    public Mnrga400ApplicationJSON withErrorDescription(Mnrga400ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Mnrga400ApplicationJSON(){}
}
