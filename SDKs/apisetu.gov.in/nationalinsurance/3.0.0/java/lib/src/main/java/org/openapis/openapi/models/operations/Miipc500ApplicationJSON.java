/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Miipc500ApplicationJSON - Internal server error
 */
public class Miipc500ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Miipc500ApplicationJSONErrorEnum error;

    public Miipc500ApplicationJSON withError(Miipc500ApplicationJSONErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public Miipc500ApplicationJSONErrorDescriptionEnum errorDescription;

    public Miipc500ApplicationJSON withErrorDescription(Miipc500ApplicationJSONErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
    
    public Miipc500ApplicationJSON(){}
}
