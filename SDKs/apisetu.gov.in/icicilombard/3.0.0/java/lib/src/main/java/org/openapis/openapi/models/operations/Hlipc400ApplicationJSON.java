/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Hlipc400ApplicationJSON - Bad request
 */
public class Hlipc400ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Hlipc400ApplicationJSONErrorEnum error;

    public Hlipc400ApplicationJSON withError(Hlipc400ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Hlipc400ApplicationJSONErrorDescriptionEnum errorDescription;

    public Hlipc400ApplicationJSON withErrorDescription(Hlipc400ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Hlipc400ApplicationJSON(){}
}
